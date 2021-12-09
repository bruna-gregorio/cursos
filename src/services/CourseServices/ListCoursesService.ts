import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"


class ListCoursesService {
  async listAllCourses() {
    const courseRepository = getCustomRepository(CourseRepository)

    const listCourses = await courseRepository.find()

    return listCourses
  }

  async listOneCourse(id: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const listOneCourse = await courseRepository.findOne(id)

    if (!listOneCourse) {
      throw new Error("This course doesn't exists!")
    }

    return listOneCourse
  }
}

export { ListCoursesService }