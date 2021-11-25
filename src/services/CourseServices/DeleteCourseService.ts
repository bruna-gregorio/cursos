import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"


class DeleteCourseService {
  async execute(id: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const idExists = await courseRepository.findOne(id)

    if (!idExists) {
      throw new Error("This course doesn't exists!")
    }

    const deleteCourse = await courseRepository.delete(id)

    return deleteCourse
  }
}

export { DeleteCourseService }