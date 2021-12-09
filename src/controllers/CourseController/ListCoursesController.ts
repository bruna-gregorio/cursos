import { Request, Response } from "express";

import { ListCoursesService } from "../../services/CourseServices/ListCoursesService";


class ListCoursesController {
  async listAllCourse(request: Request, response: Response) {
    const listCoursesService = new ListCoursesService()

    const listCourses = await listCoursesService.listAllCourses()

    return response.json(listCourses)
  }

  async listOneCourse(request: Request, response: Response) {
    const { id } = request.params

    const listCoursesService = new ListCoursesService()

    const listCourses = await listCoursesService.listOneCourse(id)

    return response.json(listCourses)
  }
}

export { ListCoursesController }