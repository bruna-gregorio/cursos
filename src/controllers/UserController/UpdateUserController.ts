import { Request, Response } from "express";

import { UpdateUserService } from "../../services/UserServices/UpdateUserService";


class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, email, password, admin, course } = request.body

    const updateUserService = new UpdateUserService()

    const userUpdate = await updateUserService.execute({ id, name, email, password, admin, course })

    return response.json(userUpdate)
  }
}

export { UpdateUserController }