import express, { urlencoded } from 'express';
import session from 'express-session';
import { citiRouter } from './modules/city/citiRouter';
import { cinemaRouter } from './modules/cinema/cinemaRouter';
import { customerRouter } from './modules/customer/customerRouter';
import { ceoRouter } from './modules/ceo/ceoRouter';
import { loginRouter } from './modules/login/loginRouter';
import { isUserAuthenticate, checkUserRole } from './middleware/authenticateUser';
import { logoutRouter } from './modules/logout/logoutRouter';
import { RedisStore } from 'connect-redis';
import Redis from 'ioredis';
import { eventRouter } from './modules/timestamp/eventsRouter';
import { Request, Response, NextFunction } from "express";

// const redisClient = new Redis();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

// configuration of session
app.use(session({
    // store : new RedisStore({client : redisClient}),
    secret : "12345",
    resave : false,
    saveUninitialized : false,
    cookie : { secure : false, maxAge : 10000 },
}));

// call loginRouter
app.use("/login", loginRouter);

// check for user authentication
app.use(isUserAuthenticate);

// call logoutRouter
app.use('/logout', logoutRouter);

// call citiRouter
app.use("/cities", citiRouter);
// call cinemaRouter
app.use("/cinema", cinemaRouter);

// call customerRouter
app.use("/customer", customerRouter);

// call ceoRouter
app.use("/ceo", checkUserRole("admin"), ceoRouter);

// call eventRouter 
app.use('/event', eventRouter);

// 404 Error Handler
app.use((req, res, next) => {
    res.status(404).send("Page Not Found");
})

// Global Error Handler Middleware
app.use((err : Error, req : Request, res : Response, next : NextFunction) => {

    res.status(500).json({
        name : err.name || "Error",
        msg : err.message || "Something went wrong!"
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000/");
});