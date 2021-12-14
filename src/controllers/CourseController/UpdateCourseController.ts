import { Request, Response } from "express";

import { UpdateCourseService } from "../../services/CourseServices/UpdateCourseService";


class UpdateCourseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { course, description, vacancies, duration, value, image } = request.body

    const updateCourseService = new UpdateCourseService()

    const update = await updateCourseService.execute({ id, course, description, vacancies, duration, value, image })

    return response.json(update)
  }
}

export { UpdateCourseController }