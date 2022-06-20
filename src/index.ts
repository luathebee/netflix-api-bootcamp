import "reflect-metadata"
import express from "express"
import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"

import databaseInitialize from "./infra/database/data-source"

import startRouters from "./routers"

const app: express.Application = express()

const PORT = 3000
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'jwtsecret' // DOTENV
}

const authStrategy = new JwtStrategy(opts, function (payload, done) {
  console.log(payload)
  return done(null, {})
})
passport.use(authStrategy)

databaseInitialize()
startRouters(app)

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
