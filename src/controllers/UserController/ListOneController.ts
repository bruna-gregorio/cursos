import { Request, Response } from "express";

import { ListOneUserService } from "../../services/UserServices/ListOneUserService";


class ListOneController {
  async handle(request: Request, response: Response) {
    const email = request.headers.authorization

    const listOneUser = new ListOneUserService()

    const list = await listOneUser.execute(email)

    return response.json(list)
  }
}

export { ListOneController }