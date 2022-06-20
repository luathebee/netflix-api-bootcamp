import express, { Application } from "express"
import morgan from "morgan"
import AuthRouter from "./auth.router"
import EpisodesRouter from "./episode.router"
import ShowsRouter from "./shows.router"
import UserRouter from "./user.router"

const routers = [
  ShowsRouter,
  AuthRouter,
  UserRouter,
  EpisodesRouter
]

const jsonParseMiddleware = express.json()

function startRouters (app: Application) {
  app.use(jsonParseMiddleware)
  app.use(morgan('tiny'))
  app.use(routers)
}

export default startRouters
