import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"


class ListOneCourseService {
  async execute(id: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const listOneCourse = await courseRepository.findOne(id)

    return listOneCourse
  }
}

export { ListOneCourseService }