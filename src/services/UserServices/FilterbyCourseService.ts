import { getCustomRepository } from "typeorm"
import { CourseRepository } from "../../repositories/CourseRepository"

import { UserRepository } from "../../repositories/UserRepository"


class FilterbyCourseService {
  async execute(course: string, id: string) {
    const userRepository = getCustomRepository(UserRepository)
    const courseRepository = getCustomRepository(CourseRepository)

    const idExists = await courseRepository.findOne(id)

    if (!idExists) {
      throw new Error("error")
    }

    const filter = await userRepository.find({ course })

    return filter
  }

}

export { FilterbyCourseService }