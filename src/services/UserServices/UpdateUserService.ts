import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"

interface IUpdateRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  course: string;
}

class UpdateUserService {
  async execute({ id, name, email, password, admin, course }: IUpdateRequest) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne(id)

    if (!user) {
      throw new Error("This user does not exists!")
    }

    const passwordHash = await hash(password, 8)

    user.name = name ? name : user.name
    user.email = email ? email : user.email
    user.password = password ? password = passwordHash : user.password
    user.admin = admin ? admin : user.admin
    user.course = course ? course : user.course

    return user
  }
}

export { UpdateUserService }