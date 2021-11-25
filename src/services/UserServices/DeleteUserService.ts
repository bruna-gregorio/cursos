import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class DeleteUserService {
  async execute(id: string) {
    const userRepository = getCustomRepository(UserRepository)

    const idExists = await userRepository.findOne(id)

    if (!idExists) {
      throw new Error("Sorry, This user doesn't exists!")
    }

    const deleteUser = await userRepository.delete(id)

    return deleteUser
  }
}

export { DeleteUserService }