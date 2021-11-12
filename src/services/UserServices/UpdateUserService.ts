import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class UpdateUserService {
  async updateNameUser(id: string, name: string) {
    const userRepository = getCustomRepository(UserRepository)

    const updateNameUser = await userRepository.update({
      id,
    }, {
      name
    })

    return updateNameUser
  }

  async updateEmailUser(id: string, email: string) {
    const userRepository = getCustomRepository(UserRepository)

    const updateEmailUser = await userRepository.update({
      id,
    }, {
      email
    })

    return updateEmailUser
  }

  async updatePasswordUser(id: string, password: string) {
    const userRepository = getCustomRepository(UserRepository)

    const updatePasswordUser = await userRepository.update({
      id,
    }, {
      password
    })

    return updatePasswordUser
  }
}

export { UpdateUserService }