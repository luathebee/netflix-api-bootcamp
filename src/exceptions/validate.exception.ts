import BadRequestException from "./bad-request.excpetion"

export default class ValidateException extends BadRequestException {
  details: string[]

  constructor (message: string, details: any[]) {
    super(message)
    this.details = details
  }
}
