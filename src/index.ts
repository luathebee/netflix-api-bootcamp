import "reflect-metadata"
import express from "express"

import databaseInitialize from "../configs/database/data-source"

import startRouters from "./routers"

const app: express.Application = express()

const PORT = 3000

databaseInitialize()
startRouters(app)

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
