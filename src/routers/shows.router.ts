import express from 'express'
import { ShowController } from '../controllers/'
import validationMiddleware from '../middlewares/validation.middleware'
import createShowSchema from '../schemas/create-show.schema'

const showsRouter = express.Router()

showsRouter.get("/shows", ShowController.listShows)
showsRouter.post("/shows", validationMiddleware(createShowSchema), ShowController.createShow)
showsRouter.get("/shows/:id", ShowController.findShow)
showsRouter.delete("/shows/:id", ShowController.deleteShow)

export default showsRouter
