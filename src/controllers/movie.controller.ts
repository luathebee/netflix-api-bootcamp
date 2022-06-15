import { Request, Response } from "express"
import MovieService from "../services/movie.service"

class MovieController {
  public static async list (req: Request, res: Response) {
    const movieService = new MovieService()
    const movies = await movieService.list()
    res.send(movies)
  }
}

export default MovieController
