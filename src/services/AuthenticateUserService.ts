import { getCustomRepository } from "typeorm"
import { sign } from "jsonwebtoken"

import { UserRepository } from "../repositories/UserRepository"
import { compare } from "bcryptjs"


class AuthenticateUserService {
  async execute(email: string, password: string) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({
      email
    })

    if (!user) {
      throw new Error("Email/Password incorrect!")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!")
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id, expiresIn: "1d"
      }
    )

    return token
  }
}

export { AuthenticateUserService }