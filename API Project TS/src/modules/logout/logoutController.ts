import { Request, Response, NextFunction } from "express";

const logoutUser = (req : Request, res : Response, next : NextFunction) : void => {
    req.session.destroy( (err) => {
        if(err) {
            res.status(500).json({
                rejectedMsg : "Logout failed."
            })
        } else {
            res.json({
                successMsg : "Logout successfully."
            })
        }
    })
}

export {logoutUser};