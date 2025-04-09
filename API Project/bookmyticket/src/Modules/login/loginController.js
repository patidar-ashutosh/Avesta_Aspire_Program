import { loginQuery } from "./loginModel.js";
import jwt from 'jsonwebtoken';

const secretKey = "12345";

// Handle user login
const getLoginInfo = async (req, res, next) => {
    try {
        const {username, password} = req.body;

        const data = await loginQuery.getLoginInfoQuery(username, password);
    
        if(data.length != 0) {
            // save user info in session
            // req.session.user = {
            //     username : data[0].username,
            //     role : data[0].role
            // };

            // save user info as a jwt
            const userData = {
                username : data[0].username,
                role : data[0].role
            }

            const token = jwt.sign({userData}, secretKey, {expiresIn : '15m'});

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

export {getLoginInfo}