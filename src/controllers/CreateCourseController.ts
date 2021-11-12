import { Request, Response } from "express";

import { CreateCourseService } from "../services/CreateCourseService";


class CreateCourseController {
  async handle(request: Request, response: Response) {
    const { name, description, vacancies } = request.body

    const createCourseService = new CreateCourseService()

    const course = await createCourseService.execute({ name, description, vacancies })

    return response.json(course)
  }
}

export { CreateCourseController }