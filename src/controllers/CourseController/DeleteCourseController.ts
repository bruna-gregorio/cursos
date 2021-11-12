import { Request, Response } from "express";

import { DeleteCourseService } from "../../services/CourseServices/DeleteCourseService";


class DeleteCourseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const deleteCourseService = new DeleteCourseService()

    await deleteCourseService.execute(id)

    return response.json({
      "message": `User ${id} deleted successfully!`
    })
  }
}

export { DeleteCourseController }