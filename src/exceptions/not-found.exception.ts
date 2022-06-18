class NotFoundException extends Error {
  message: string

  status: number

  constructor (message: string) {
    super(message)

    this.status = 404
    this.message = message
  }
}

export default NotFoundException
