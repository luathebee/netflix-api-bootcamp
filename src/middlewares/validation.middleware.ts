import { NextFunction, Request } from "express"
import { Schema } from "joi"
import { ValidateException } from "../exceptions"
import { CustomResponse } from "../interfaces"

const validationMiddleware = (schema: Schema) => async (req: Request, res: CustomResponse, next: NextFunction) => {
  try {
    const validation = await schema.validate(req.body, { abortEarly: false })
    if (validation.error) {
      throw new ValidateException("Campos Invalidos") // validate.error?.details
    }

    next()
  } catch (e) {
    res.errorHandler && res.errorHandler(e)
  }
}

export default validationMiddleware
