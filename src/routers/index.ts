import express, { Application } from "express"
import morgan from "morgan"
import moviesRouter from "./movies.router"

const routes = [
  moviesRouter
]

const jsonParseMiddleware = express.json()

function startRoutes (app: Application) {
  app.use(jsonParseMiddleware)
  app.use(morgan('tiny'))
  app.use(routes)
}

export default startRoutes
