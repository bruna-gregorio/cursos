import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class ListUsersService {
  async listStudents() {
    const userRepository = getCustomRepository(UserRepository)

    const listUser = await userRepository.find({
      where: {
        admin: false
      }
    })

    return listUser
  }

  async listAdmin() {
    const userRepository = getCustomRepository(UserRepository)

    const userAdmin = await userRepository.find({
      where: {
        admin: true
      }
    })

    return userAdmin
  }

  async listOneUser(email: string) {
    const userRepository = getCustomRepository(UserRepository)

    const listOneUser = await userRepository.findOne(email)

    return listOneUser
  }
}

export { ListUsersService }