import { getCustomRepository } from "typeorm"

import { UserRepository } from "../repositories/UserRepository"


class DeleteUserService {
  async execute(id: string) {
    const userRepository = getCustomRepository(UserRepository)

    const deleteUser = await userRepository.delete(id)

    return deleteUser
  }
}

export { DeleteUserService }