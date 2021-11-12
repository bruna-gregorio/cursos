import { Request, Response } from "express";

import { UpdateUserService } from "../../services/UserServices/UpdateUserService";


class UpdateUserController {
  async updateName(request: Request, response: Response) {
    const { id } = request.params
    const { name } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.updateNameUser(id, name)

    const userUpdate = {
      message: "Name updated successfully!",
      userNameUpdated: {
        name: request.body.name,
      }
    }

    return response.json(userUpdate)
  }

  async updateEmail(request: Request, response: Response) {
    const { id } = request.params
    const { email } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.updateEmailUser(id, email)

    const userUpdate = {
      message: "Email updated successfully!",
      userNameUpdated: {
        email: request.body.email,
      }
    }

    return response.json(userUpdate)
  }

  async updatePassword(request: Request, response: Response) {
    const { id } = request.params
    const { password } = request.body

    const updateUserService = new UpdateUserService()

    await updateUserService.updatePasswordUser(id, password)

    const userUpdate = {
      message: "Password updated successfully!",
      userNameUpdated: {
        password: request.body.password,
      }
    }

    return response.json(userUpdate)
  }
}

export { UpdateUserController }