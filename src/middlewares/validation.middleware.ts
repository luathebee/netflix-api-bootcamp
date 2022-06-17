import { NextFunction, Request, response, Response } from "express"
import { Schema } from "joi"

const validationMiddleware = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await schema.validateAsync(req.body)
    next()
  } catch (e: any) {
    response.status(400).json({ error: true, message: e.message })
  }
}

export default validationMiddleware
