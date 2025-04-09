import { loginQuery } from "./loginModel";
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";

const secretKey:string = "12345";

interface RequestWithUser extends Request {
    session: {
        user?: {
            username: string;
            role: string;
        };
    } & Request['session']; // & means we add new definition in existing req.session

    user?: {
        username: string;
        role: string;
    }
}

// Handle user login with session
// const getLoginInfo = async (req : RequestWithUser, res : Response, next : NextFunction) : Promise<void> => {
//     try {
//         const {username, password} = req.body;

//         const data = await loginQuery.getLoginInfoQuery(username, password);
    
//         if(data.length != 0) {
//             // save user info in session
//             req.session.user = {
//                 username : data[0].username,
//                 role : data[0].role
//             };

//             res.status(200).json({
//                 successMsg : "Login successfully."
//             })
//         } else {
//             res.status(501).json({
//                 rejectedMsg : "username and password is invalid."
//             })
//         }
//     } catch(err) {
//         next(err);
//     }
// }

// Handle user login with jwt
const getLoginInfo = async (req : RequestWithUser, res : Response, next : NextFunction) : Promise<void> => {
    try {
        const {username, password} = req.body;

        const data = await loginQuery.getLoginInfoQuery(username, password);
    
        if(data.length != 0) {
            // save user info as a jwt
            const userData = {
                username : data[0].username,
                role : data[0].role
            }

            const token:string = jwt.sign({userData}, secretKey, {expiresIn : '1m'});

            res.status(200).json({
                successMsg : "Login successfully.",
                token
            })
        } else {
            res.status(501).json({
                rejectedMsg : "username and password is invalid."
            })
        }
    } catch(err) {
        next(err);
    }
}

export { getLoginInfo, RequestWithUser }