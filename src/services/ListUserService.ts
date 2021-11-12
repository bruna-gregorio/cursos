import { getCustomRepository } from "typeorm"

import { UserRepository } from "../repositories/UserRepository"


class ListUserService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository)

    const listUser = await userRepository.find({
      where: {
        admin: false
      }
    })

    return listUser
  }

}

export { ListUserService }