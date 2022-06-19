import Joi from "joi"

const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
  // check out joi-pasword on npm for complex validation
})

export default LoginSchema
