import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"


interface ICourseRequest {
  course: string;
  description: string;
  vacancies: string;
  duration: string;
  value: Number;
  image: string;
}

class CreateCourseService {
  async execute({ course, description, vacancies, duration, value, image }: ICourseRequest) {
    const courseRepository = getCustomRepository(CourseRepository)

    if (!course) {
      throw new Error("Name incorrect!")
    }

    const courseExists = await courseRepository.findOne({
      course
    })

    if (courseExists) {
      throw new Error("This course already exists!")
    }

    const courseName = courseRepository.create({
      course,
      description,
      vacancies,
      duration,
      value,
      image
    })

    await courseRepository.save(courseName)

    return courseName
  }
}

export { CreateCourseService }