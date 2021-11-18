import { Request, Response } from "express";

import { ListUserService } from "../../services/UserServices/ListUserService";


class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListUserService()

    const listAllUser = await listUserService.execute()

    return response.json(listAllUser)
  }
}

export { ListUserController }