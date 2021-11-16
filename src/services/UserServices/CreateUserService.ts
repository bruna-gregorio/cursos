import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"
import { CourseRepository } from "../../repositories/CourseRepository"


interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
  course: string;
}

class CreateUserService {
  async execute({ name, email, password, admin = false, course }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository)
    const courseRepository = getCustomRepository(CourseRepository)

    if (!email) {
      throw new Error("Email incorrect!")
    }

    const userExists = await userRepository.findOne({
      email
    })

    if (userExists) {
      throw new Error("User already exists!")
    }

    const courseDontExists = await courseRepository.find({
      course
    })

    if (courseDontExists) {
      throw new Error("This course do not exists!")
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      admin,
      course
    })

    await userRepository.save(user)

    return user
  }
}

export { CreateUserService }