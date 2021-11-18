import { Router } from "express"

import { ensureAuthenticate } from "./middleware/ensureAuthenticate"
import { ensureAdmin } from "./middleware/ensureAdmin"

import { AuthenticateUserController } from "./controllers/UserController/AuthenticateUserController"

import { CreateUserController } from "./controllers/UserController/CreateUserController"
import { ListUserController } from "./controllers/UserController/ListUserController"
import { UpdateUserController } from "./controllers/UserController/UpdateUserController"
import { DeleteUserController } from "./controllers/UserController/DeleteUserController"

import { CreateCourseController } from "./controllers/CourseController/CreateCourseController"
import { ListCoursesController } from "./controllers/CourseController/ListCoursesController"
import { UpdateCourseController } from "./controllers/CourseController/UpdateCourseController"
import { DeleteCourseController } from "./controllers/CourseController/DeleteCourseController"

import { FilterbyCourseController } from "./controllers/UserController/FilterbyCourseController"

import { ListUserAdminController } from "./controllers/UserController/ListUserAdminController"


const routes = Router()


const authenticateUserController = new AuthenticateUserController()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const listUserAdminController = new ListUserAdminController()

const createCourseController = new CreateCourseController()
const listCoursesController = new ListCoursesController()
const updateCourseController = new UpdateCourseController()
const deleteCourseController = new DeleteCourseController()

const filterbyCourseController = new FilterbyCourseController()


routes.post("/login", authenticateUserController.handle)

//users
routes.post("/users", createUserController.handle)
routes.get("/users", ensureAuthenticate, listUserController.handle)
routes.put("/users/name/:id", ensureAuthenticate, updateUserController.updateName)
routes.put("/users/email/:id", ensureAuthenticate, updateUserController.updateEmail)
routes.put("/users/password/:id", ensureAuthenticate, updateUserController.updatePassword)
routes.delete("/users/:id", ensureAuthenticate, deleteUserController.handle)

routes.get("/users/admin", listUserAdminController.handle)

//courses
routes.post("/courses", ensureAuthenticate, ensureAdmin, createCourseController.handle)
routes.get("/courses", listCoursesController.handle)
routes.put("/courses/name/:id", ensureAuthenticate, ensureAdmin, updateCourseController.updateCourse)
routes.put("/courses/description/:id", ensureAuthenticate, ensureAdmin, updateCourseController.updateDescription)
routes.put("/courses/vacancies/:id", ensureAuthenticate, ensureAdmin, updateCourseController.updateVacancies)
routes.delete("/courses/:id", ensureAuthenticate, ensureAdmin, deleteCourseController.handle)

routes.get("/course/filter/:id", filterbyCourseController.handle)


export { routes }
