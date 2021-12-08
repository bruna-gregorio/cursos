import { Request, Response } from "express";

import { ListOneCourseService } from "../../services/CourseServices/ListOneCourseService";


class ListOneCourseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const listOneCourse = new ListOneCourseService

    const list = await listOneCourse.execute(id)

    return response.json(list)
  }
}

export { ListOneCourseController }