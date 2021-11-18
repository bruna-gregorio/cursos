import { Request, Response } from "express";

import { ListUserAdminService } from "../../services/UserServices/ListUserAdminService";


class ListUserAdminController {
  async handle(request: Request, response: Response) {
    const listUserAdminService = new ListUserAdminService()

    const userAdmin = await listUserAdminService.execute()

    return response.json(userAdmin)
  }
}

export { ListUserAdminController }