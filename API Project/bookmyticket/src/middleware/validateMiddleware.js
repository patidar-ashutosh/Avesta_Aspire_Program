const validate = (schema, source = "body") => (req, res, next) => {

    console.log(req[source]);

    const {error} = schema.validate(req[source]);

    if(error) {
        return res.status(400).json({
            msg : error.details[0].message
        })
    }

    next();
}