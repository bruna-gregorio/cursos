import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"


class UpdateCourseService {
  async updateName(id: string, course: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const updateName = courseRepository.update({
      id
    }, {
      course
    })

    return updateName
  }

  async updateDescription(id: string, description: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const updateDescription = courseRepository.update({
      id
    }, {
      description
    })

    return updateDescription
  }

  async updateVacancies(id: string, vacancies: string) {
    const courseRepository = getCustomRepository(CourseRepository)

    const updateVacancies = courseRepository.update({
      id
    }, {
      vacancies
    })

    return updateVacancies
  }
}

export { UpdateCourseService }