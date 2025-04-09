import jwt from 'jsonwebtoken';
const secretKey = "12345";

// this middleware is help to protect the routes

const isUserAuthenticate = (req, res, next) => {
    // code for session
    /* const userSessionObj = req.session.user;
    if(userSessionObj && userSessionObj.username) {
        next(); // means user is authenticated
    } else {
        return res.status(401).json({
            rejectedMsg : "You need to login first."
        })
    } */

    // code for jwt token
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            rejectedMsg: "You need to login first."
        });   
    }

    const token = authHeader.split(" ")[1];

    try {
        const decode = jwt.verify(token, secretKey);
        req.user = decode.userData;
        next();
    } catch (err) {
        return res.status(401).json({
            rejectedMsg: "Invalid or expired token."
        });
    }
}

const checkUserRole = (role) => {
    return (req, res, next) => {
        // code for session
        /* const userSessionObj = req.session.user;
        if(!userSessionObj || userSessionObj.role !== role) {
            return res.status(404).json({
                rejectedMsg : "Access denied. Invalid role."
            })
        } else {
            next();
        } */

        // code for jwt token
        const token = req.headers.authorization?.split(' ')[1];

        if(!token) {
            return res.status(404).json({
                rejectedMsg : "Access denied. Token not provided."
            })
        }
        
        try {
            const decode = jwt.verify(token, secretKey);

            if(decode.userData.role !== role) {
                return res.status(404).json({
                    rejectedMsg : "Access denied. Invalid role."
                })   
            }
            next();
        } catch(err) {
            return res.status(401).json({
                rejectedMsg : "Invalid or expired token."
            })
        }
    }
}

export { isUserAuthenticate, checkUserRole };