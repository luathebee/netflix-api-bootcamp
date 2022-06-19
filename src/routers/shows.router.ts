import express from 'express'
import { ShowController } from '../controllers/'
import validationMiddleware from '../middlewares/validation.middleware'
import createShowSchema from '../schemas/create-show.schema'

const ShowsRouter = express.Router()

ShowsRouter.get("/shows", ShowController.listShows)
ShowsRouter.post("/shows", validationMiddleware(createShowSchema), ShowController.createShow)
ShowsRouter.get("/shows/:id", ShowController.findShow)
ShowsRouter.delete("/shows/:id", ShowController.deleteShow)

export default ShowsRouter
