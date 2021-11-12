import { Router } from "express"

import { ensureAuthenticate } from "./middleware/ensureAuthenticate"
import { ensureAdmin } from "./middleware/ensureAdmin"

import { AuthenticateUserController } from "./controllers/AuthenticateUserController"

import { CreateCourseController } from "./controllers/CreateCourseController"
import { CreateUserController } from "./controllers/CreateUserController"
import { DeleteUserController } from "./controllers/DeleteUserController"
import { ListUserController } from "./controllers/ListUserController"
import { UpdateUserController } from "./controllers/UpdateUserController"

const routes = Router()

const authenticateUserController = new AuthenticateUserController()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createCourseController = new CreateCourseController()

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

export { routes }
