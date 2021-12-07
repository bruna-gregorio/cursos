import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class ListOneUserService {
  async execute(email: string) {
    const userRepository = getCustomRepository(UserRepository)

    const listOne = await userRepository.findOne(email)

    return listOne
  }
}

export { ListOneUserService }