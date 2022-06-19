import { Request } from "express"
import { CustomResponse } from "../interfaces"
import AuthService from "../services/auth.service"

const authService = new AuthService()

export default class AuthController {
  public static async login (req: Request, res: CustomResponse) {
    const { body: { email, password } } = req

    try {
      const authenticated = await authService.login(email, password)

      res.send(authenticated)
    } catch (e) {
      console.log(`erro ao logar usuario: Dados ${JSON.stringify({ email })}`)
    }
  }
}
