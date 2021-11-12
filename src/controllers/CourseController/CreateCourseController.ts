import { Request, Response } from "express";

import { CreateCourseService } from "../../services/CourseServices/CreateCourseService";


class CreateCourseController {
  async handle(request: Request, response: Response) {
    const { course, description, vacancies } = request.body

    const createCourseService = new CreateCourseService()

    const courseName = await createCourseService.execute({ course, description, vacancies })

    return response.json(courseName)
  }
}

export { CreateCourseController }