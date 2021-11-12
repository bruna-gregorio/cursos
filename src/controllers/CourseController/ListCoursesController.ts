import { Request, Response } from "express";

import { ListCoursesService } from "../../services/CourseServices/ListCoursesService";


class ListCoursesController {
  async handle(request: Request, response: Response) {
    const listCoursesService = new ListCoursesService()

    const listCourses = await listCoursesService.execute()

    return response.json(listCourses)
  }
}

export { ListCoursesController }