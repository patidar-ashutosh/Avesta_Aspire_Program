import Joi from "joi";

const validateEvent = (req, res, next) => {
    const {eventName, eventTime} = req.body;

    const schema = Joi.object({
        eventName : Joi.string()
        .min(2)
        .required()
        .messages({
            'string.base' : "Event name must be a text.",
            'string.empty' : "Event name is required and cannot be empty.",
            'string.min' : "Event name have at least 2 characters.",
            'any.required' : "Event name is required filed."
        }),

        eventTime : Joi.date()
        .required()
    })

    const {error} = schema.validate({eventName, eventTime});

    if(error) {
        return res.status(400).json({
            errorMsg : error.details[0].message
        })
    }

    next();
}

export { validateEvent };