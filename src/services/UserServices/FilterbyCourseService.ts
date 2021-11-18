import { getCustomRepository } from "typeorm"

import { UserRepository } from "../../repositories/UserRepository"


class FilterbyCourseService {
  async execute(course: string) {
    const userRepository = getCustomRepository(UserRepository)

    const filter = await userRepository.find({ course })

    return filter
  }

}

export { FilterbyCourseService }