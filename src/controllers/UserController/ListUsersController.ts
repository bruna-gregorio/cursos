import { Request, Response } from "express";

import { ListUsersService } from "../../services/UserServices/ListUsersService";


class ListUsersController {
  async listStudents(request: Request, response: Response) {
    const listUserService = new ListUsersService()

    const listAllUser = await listUserService.listStudents()

    return response.json(listAllUser)
  }

  async listAdmin(request: Request, response: Response) {
    const listUserAdminService = new ListUsersService()

    const userAdmin = await listUserAdminService.listAdmin()

    return response.json(userAdmin)
  }

  async listOneUser(request: Request, response: Response) {
    const email = request.headers.authorization

    const listOneUser = new ListUsersService()

    const list = await listOneUser.listOneUser(email)

    return response.json(list)
  }
}

export { ListUsersController }