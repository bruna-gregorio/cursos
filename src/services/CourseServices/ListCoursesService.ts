import { getCustomRepository } from "typeorm"
import { CourseRepository } from "../../repositories/CourseRepository"



class ListCoursesService {
  async execute() {
    const courseRepository = getCustomRepository(CourseRepository)

    const listCourses = await courseRepository.find()

    return listCourses
  }
}

export { ListCoursesService }