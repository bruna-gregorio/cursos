import { Request, Response } from "express";

import { CreateUserService } from "../../services/UserServices/CreateUserService";


class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, admin, course } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, password, admin, course })

    return response.json(user)
  }
}

export { CreateUserController }