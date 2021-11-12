import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository)

    if (!email) {
      throw new Error("Email incorrect!")
    }

    const userExists = await userRepository.findOne({
      email
    })

    if (userExists) {
      throw new Error("User already exists!")
    }

    const passwordHash = await hash(password, 8)

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    })

    await userRepository.save(user)

    return user
  }
}

export { CreateUserService }