import 'reflect-metadata'
import express from 'express'
//  import morgan from 'morgan'
import { DataSource } from 'typeorm'
import Movie from './entities/movie.entity'
import MovieController from './controllers/movie.controller'
import databaseInitialize from '../configs/database/data-source'

const app: express.Application = express()

const PORT = 3000

databaseInitialize()

const jsonParseMiddleware = express.json()
app.use(jsonParseMiddleware)

app.get("/movies", MovieController.list)
/*
app.get("/movies", async (req, res) => {
  const moviesRepository = await AppDataSource.getRepository(Movie)
  const movies = await moviesRepository.find()

  res.send(movies)
})
*/

app.listen(PORT, () => {
  console.log(`Escutando porta ${PORT}`)
})
