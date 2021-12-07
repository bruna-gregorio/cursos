import { Request, Response } from "express"

import { FilterbyCourseService } from "../../services/UserServices/FilterbyCourseService"


class FilterbyCourseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const filterbyCourseService = new FilterbyCourseService()

    const filter = await filterbyCourseService.execute(id, id)

    response.json(filter)
  }
}

export { FilterbyCourseController }