import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../repositories/CourseRepository"


interface ICourseRequest {
  name: string;
  description: string;
  vacancies: string;
}

class CreateCourseService {
  async execute({ name, description, vacancies }: ICourseRequest) {
    const courseRepository = getCustomRepository(CourseRepository)

    if (!name) {
      throw new Error("Name incorrect!")
    }

    const courseExists = await courseRepository.findOne({
      name
    })

    if (courseExists) {
      throw new Error("This course already exists!")
    }

    const course = courseRepository.create({
      name,
      description,
      vacancies
    })

    await courseRepository.save(course)

    return course
  }
}

export { CreateCourseService }