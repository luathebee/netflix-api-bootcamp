import express, { Application } from "express"
import morgan from "morgan"
import showsRouter from "./shows.router"

const routers = [
  showsRouter
]

const jsonParseMiddleware = express.json()

function startRouters (app: Application) {
  app.use(jsonParseMiddleware)
  app.use(morgan('tiny'))
  app.use(routers)
}

export default startRouters
