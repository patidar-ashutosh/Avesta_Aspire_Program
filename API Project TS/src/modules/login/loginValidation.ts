import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateLoginDetails = (req : Request, res : Response, next : NextFunction) : any => {
    const {username, password} = req.body;

    const schema = Joi.object({
        username : Joi.string()
        .min(1)
        .required(),

        password : Joi.string()
        .min(1)
        .required()
    })

    const {error} = schema.validate({username, password});

    if(error) {
        return res.status(400).json({
            rejectMsg : error.details[0].message
        })
    }

    next();
}

export {validateLoginDetails};