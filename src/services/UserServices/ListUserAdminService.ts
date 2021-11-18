import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class ListUserAdminService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository)

    const userAdmin = await userRepository.find({
      where: {
        admin: true
      }
    })

    return userAdmin
  }
}

export { ListUserAdminService }