import session from "express-session"

const logoutUser = (req, res, next) => {
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