import { Request } from "express"
import { Show } from "../entities"
import HTTP_STATUS from "../enums/http-status.enum"
import { CustomResponse } from "../interfaces"
import { ShowService } from "../services"

const showService = new ShowService()

class ShowController {
  public static async listShows (req: Request, res: CustomResponse) {
    try {
      const shows = await showService.list()
      res.json(shows)
    } catch (e) {
      res.errorHandler && res.errorHandler(e)
    }
  }

  public static async findShow (req: Request, res: CustomResponse) {
    try {
      const { params: { id } } = req
      const show = await showService.findShow(+id)

      res.json(show)
    } catch (e) {
      res.errorHandler && res.errorHandler(e)
    }
  }

  public static async createShow (req: Request, res: CustomResponse) {
    try {
      const show: Show = req.body
      const result = await showService.create(show)

      res.json(result).status(HTTP_STATUS.CREATED)
    } catch (e) {
      res.errorHandler && res.errorHandler(e)
    }
  }

  public static async deleteShow (req: Request, res: CustomResponse) {
    try {
      const { params: { id } } = req
      const shows = await showService.delete(+id)
      res.json(shows)
    } catch (e) {
      res.errorHandler && res.errorHandler(e)
    }
  }
}

export default ShowController
