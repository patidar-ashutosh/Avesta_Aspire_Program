import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { RequestWithUser } from '../modules/login/loginController';

const secretKey : string = "12345";

// add userData in jwt because jtw return either string or JwtPayload load type data
// so our userData property type is not define in that
interface customeJwtPayload extends JwtPayload {
    userData : {
        username : string;
        role : string;
    }
}

// this middleware is help to protect the routes
const isUserAuthenticate = (req : RequestWithUser, res : Response, next : NextFunction) : void => {
    // code for session
    /* const userSessionObj = req.session?.user;
    if(userSessionObj && userSessionObj.username) {
        next(); // means user is authenticated
    } else {
        res.status(401).json({
            rejectedMsg : "You need to login first."
        })
    } */

    // code for jwt token
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({
            rejectedMsg: "You need to login first."
        });   
    }

    if(authHeader) {
        const token : string = authHeader.split(" ")[1];

        try {
            const decode = jwt.verify(token, secretKey) as customeJwtPayload;
            req.user = decode.userData;
            next();
        } catch (err) {
            res.status(401).json({
                rejectedMsg: "Invalid or expired token."
            });
        }
    } else {
        res.status(400).json({ error: "Invalid auth header!!!"});
    }

}

const checkUserRole = (role : string) => {
    return (req : RequestWithUser, res : Response, next : NextFunction) => {
        // code for session
        /* const userSessionObj = req.session.user;
        if(!userSessionObj || userSessionObj.role !== role) {
            res.status(404).json({
                rejectedMsg : "Access denied. Invalid role."
            })
        } else {
            next();
        } */

        // code for jwt token
        const token:string | undefined = req.headers.authorization?.split(' ')[1];

        if(!token) {
            res.status(404).json({
                rejectedMsg : "Access denied. Token not provided."
            })
        } else {
            try {
                const decode = jwt.verify(token, secretKey) as customeJwtPayload;
    
                if(decode.userData.role !== role) {
                    res.status(404).json({
                        rejectedMsg : "Access denied. Invalid role."
                    })   
                }
                next();
            } catch(err) {
                res.status(401).json({
                    rejectedMsg : "Invalid or expired token."
                })
            }
        }
        
    }
}

export { isUserAuthenticate, checkUserRole };