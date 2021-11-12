import { Request, Response } from "express";

import { ListUserService } from "../services/ListUserService";


class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListUserService()

    const listUser = await listUserService.execute()

    return response.json(listUser)
  }
}

export { ListUserController }