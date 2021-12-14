import { getCustomRepository } from "typeorm"

import { CourseRepository } from "../../repositories/CourseRepository"

interface IUpdateRequest {
  id: string;
  course: string;
  description: string;
  vacancies: string;
  duration: string;
  value: Number;
  image: string;
}

class UpdateCourseService {
  async execute({ id, course, description, vacancies, duration, value, image }: IUpdateRequest) {
    const courseRepository = getCustomRepository(CourseRepository)

    const courseExists = await courseRepository.findOne(id)

    if (!courseExists) {
      throw new Error("Course does not exists")
    }

    courseExists.course = course ? course : courseExists.course
    courseExists.description = description ? description : courseExists.description
    courseExists.vacancies = vacancies ? vacancies : courseExists.vacancies
    courseExists.duration = duration ? duration : courseExists.duration
    courseExists.value = value ? value : courseExists.value
    courseExists.image = image ? image : courseExists.image

    await courseRepository.save(courseExists)

    return courseExists
  }
}

export { UpdateCourseService }