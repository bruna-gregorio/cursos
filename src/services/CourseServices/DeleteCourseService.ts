import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"


class DeleteCourseService {
  async execute(id: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const deleteCourse = await courseRepository.delete(id)

    return deleteCourse
  }
}

export { DeleteCourseService }