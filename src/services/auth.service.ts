import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { UnauthorizedException } from "../exceptions"
import UserService from "./user.service"

export default class AuthService {
  /**
   * Realiza autenticação do usuário
   *
   * @param email email do usuário
   * @param password email do usuário
   * @returns LoginResponse
   *
   */

  async login (email: string, password: string) {
    const userService = new UserService()

    const user = await userService.getUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException()
    }

    const passwordmatches = await bcrypt.compare(password, user.password)

    if (!passwordmatches) {
      throw new UnauthorizedException()
    }

    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, "jwtsecret") // DOTENV

    return {
      token
    }
  }
}
