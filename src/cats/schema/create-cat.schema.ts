import Joi = require('@hapi/joi')

export const createCatSchema = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
  breed: Joi.string()
})
