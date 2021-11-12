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
import { DeleteCourseController } from "./controllers/CourseController/DeleteCourseController"

const routes = Router()

const authenticateUserController = new AuthenticateUserController()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createCourseController = new CreateCourseController()
const listCoursesController = new ListCoursesController()
const deleteCourseController = new DeleteCourseController()

routes.post("/login", authenticateUserController.handle)

//users
routes.post("/users", createUserController.handle)
routes.get("/users", ensureAuthenticate, listUserController.handle)
routes.put("/users/name/:id", ensureAuthenticate, updateUserController.updateName)
routes.put("/users/email/:id", ensureAuthenticate, updateUserController.updateEmail)
routes.put("/users/password/:id", ensureAuthenticate, updateUserController.updatePassword)
routes.delete("/users/:id", ensureAuthenticate, deleteUserController.handle)

//courses
routes.post("/courses", ensureAuthenticate, ensureAdmin, createCourseController.handle)
routes.get("/courses", listCoursesController.handle)
routes.delete("/courses/:id", deleteCourseController.handle)

export { routes }
