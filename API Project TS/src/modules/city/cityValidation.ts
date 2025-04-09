import Joi from 'joi';
import { Request, Response, NextFunction } from "express";

const validateCity = (req : Request, res : Response, next : NextFunction) : any => {
    const {name, state} = req.body;

    const schema = Joi.object({
        name : Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .min(2)
        .required()
        .messages({
            'string.base' : "Name must be a text.",
            'string.empty' : "Name is required and cannot be empty.",
            'string.pattern.base' : "Name can contain only letters.",
            'string.min' : "Name have at least 2 characters.",
            'any.required' : "Name is required filed."
        }),
    
        state : Joi.string()
        .regex(/^[a-zA-Z\s]+$/)
        .min(2)
        .required()
        .messages({
            'string.base' : "State must be a text.",
            'string.empty' : "State is required and cannot be empty.",
            'string.pattern.base' : "State can contain only letters.",
            'string.min' : "State have at least 2 characters.",
            'any.required' : "State is required filed."
        })
    })

    const {error} = schema.validate({name, state});

    if(error) {
        return res.status(400).json({
            errorMsg : error.details[0].message
        })
    }

    next();
}

export {validateCity};