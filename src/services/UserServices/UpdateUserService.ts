import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class UpdateUserService {
  async updateNameUser(id: string, name: string) {
    const userRepository = getCustomRepository(UserRepository)

    const idExists = await userRepository.findOne(id)

    if (!idExists) {
      throw new Error("This user doesn't exists!")
    }

    const updateNameUser = await userRepository.update({
      id,
    }, {
      name
    })

    return updateNameUser
  }

  async updateEmailUser(id: string, email: string) {
    const userRepository = getCustomRepository(UserRepository)

    const idExists = await userRepository.findOne(id)

    if (!idExists) {
      throw new Error("This user doesn't exists!")
    }

    const updateEmailUser = await userRepository.update({
      id,
    }, {
      email
    })

    return updateEmailUser
  }

  async updatePasswordUser(id: string, password: string) {
    const userRepository = getCustomRepository(UserRepository)

    const idExists = await userRepository.findOne(id)

    if (!idExists) {
      throw new Error("This user doesn't exists!")
    }

    const passwordHash = await hash(password, 8)

    const updatePasswordUser = await userRepository.update({
      id,
    }, {
      password: passwordHash
    })

    return updatePasswordUser
  }
}

export { UpdateUserService }