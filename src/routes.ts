import { Router } from "express"

import { CreateCourseController } from "./controllers/CreateCourseController"
import { CreateUserController } from "./controllers/CreateUserController"
import { DeleteUserController } from "./controllers/DeleteUserController"
import { ListUserController } from "./controllers/ListUserController"
import { UpdateUserController } from "./controllers/UpdateUserController"

const routes = Router()

const createUserController = new CreateUserController()
const listUserController = new ListUserController()
const updateUserController = new UpdateUserController()
const deleteUserController = new DeleteUserController()

const createCourseController = new CreateCourseController()

//users
routes.post("/users", createUserController.handle)
routes.get("/users", listUserController.handle)
routes.put("/users/name/:id", updateUserController.updateName)
routes.put("/users/email/:id", updateUserController.updateEmail)
routes.put("/users/password/:id", updateUserController.updatePassword)
routes.delete("/users/:id", deleteUserController.handle)

//courses
routes.post("/courses", createCourseController.handle)

export { routes }
