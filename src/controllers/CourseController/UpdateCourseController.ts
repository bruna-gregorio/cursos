import { Request, Response } from "express";

import { UpdateCourseService } from "../../services/CourseServices/UpdateCourseService";


class UpdateCourseController {
  async updateCourse(request: Request, response: Response) {
    const { id } = request.params
    const { course } = request.body

    const updateCourseService = new UpdateCourseService()

    await updateCourseService.updateName(id, course)

    const courseUpdate = {
      message: "Course updated successfully!",
      courseNameUpdated: {
        course: request.body.course,
      }
    }

    return response.json(courseUpdate)
  }

  async updateDescription(request: Request, response: Response) {
    const { id } = request.params
    const { description } = request.body

    const updateCourseService = new UpdateCourseService()

    await updateCourseService.updateDescription(id, description)

    const courseUpdate = {
      message: "Description updated successfully!",
      courseDescriptionUpdated: {
        Description: request.body.description,
      }
    }

    return response.json(courseUpdate)
  }

  async updateVacancies(request: Request, response: Response) {
    const { id } = request.params
    const { vacancies } = request.body

    const updateCourseService = new UpdateCourseService()

    await updateCourseService.updateVacancies(id, vacancies)

    const courseUpdate = {
      message: "Vacancies updated successfully!",
      courseVacanciesUpdated: {
        vacancies: request.body.vacancies,
      }
    }

    return response.json(courseUpdate)
  }

  async updateImage(request: Request, response: Response) {
    const { id } = request.params
    const { image } = request.body

    const updateCourseService = new UpdateCourseService()

    await updateCourseService.updateImage(id, image)

    const courseUpdate = {
      message: "Image updated successfully!",
      courseImageUpdated: {
        vacancies: request.body.image,
      }
    }

    return response.json(courseUpdate)
  }

  async updateValue(request: Request, response: Response) {
    const { id } = request.params
    const { value } = request.body

    const updateCourseService = new UpdateCourseService()

    await updateCourseService.updateValue(id, value)

    const courseUpdate = {
      message: "Image updated successfully!",
      courseValueUpdated: {
        value: request.body.value,
      }
    }

    return response.json(courseUpdate)
  }
}

export { UpdateCourseController }