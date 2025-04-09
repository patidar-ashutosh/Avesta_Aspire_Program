import Joi from "joi";

const validateCinema = (req, res, next) => {
    const {code, name, cityId, address} = req.body;

    const schema = Joi.object({
        code : Joi.number()
        .integer()
        .positive()
        .min(2)
        .required()
        .messages({
            'number.base' : "Code must be a number.",
            'number.empty' : "Code is required and cannot be empty.",
            'number.integer' : "Code must be an integer.",
            'number.positive': 'Code must be a positive number.',
            'number.min' : "Code have at least 2 digits.",
            'any.required' : "Code is required filed."
        }),

        name : Joi.string()
        .min(2)
        .required()
        .messages({
            'string.base' : "Name must be a text.",
            'string.empty' : "Name is required and cannot be empty.",
            'string.min' : "Name have at least 2 characters.",
            'any.required' : "Name is required filed."
        }),
        
        cityId : Joi.number()
        .integer()
        .positive()
        .min(2)
        .required()
        .messages({
            'number.base' : "City ID must be a number.",
            'number.empty' : "City ID is required and cannot be empty.",
            'number.integer' : "City ID must be an integer.",
            'number.positive': 'City ID must be a positive number.',
            'number.min' : "City ID have at least 2 digits.",
            'any.required' : "City ID is required filed."
        }),
            
        address : Joi.string()
        .min(2)
        .required()
        .messages({
            'string.base' : "Address must be a text.",
            'string.empty' : "Address is required and cannot be empty.",
            'string.min' : "Address have at least 2 characters.",
            'any.required' : "Address is required filed."
        })
    })

    const {error} = schema.validate({code, name, cityId, address});

    if(error) {
        return res.status(400).json({
            errorMsg : error.details[0].message
        })
    }

    next();
}

export {validateCinema};