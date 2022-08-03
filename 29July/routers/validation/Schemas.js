const Joi = require('joi');


const categorySchema = Joi.object(
    {
        "cate_title": Joi.string().required().min(3).max(40),
        "cate_desc":Joi.string().required(),     
    }
)

const productSchema = Joi.object(
    {
        "name": Joi.string().required().min(3).max(40),
        "description":Joi.string(), 
        "price":Joi.number().required().min(1),
        "cate_id":Joi.required(),
    }
)

module.exports = {categorySchema,productSchema}  

