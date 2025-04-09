import Joi from "joi";

const validateLoginDetails = (req, res, next) => {
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