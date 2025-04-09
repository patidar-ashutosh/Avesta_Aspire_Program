import express, { urlencoded } from 'express';
import session from 'express-session';
import { citiRouter } from './src/Modules/city/citiRouter.js';
import { cinemaRouter } from './src/Modules/cinema/cinemaRouter.js';
import { customerRouter } from './src/Modules/customer/customerRouter.js';
import { ceoRouter } from './src/Modules/ceo/ceoRouter.js';
import { loginRouter } from './src/Modules/login/loginRouter.js';
import { isUserAuthenticate, checkUserRole } from './src/middleware/authenticateUser.js';
import { logoutRouter } from './src/Modules/logout/logoutRouter.js';
import { RedisStore } from 'connect-redis';
import Redis from 'ioredis';
import { eventRouter } from './src/Modules/timestamp/eventsRouter.js';

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
    cookie : { secure : false, maxAge : 3600000 },
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
app.use((err, req, res, next) => {

    res.status(err.statusCode || 500).json({
        name : err.name || "Error",
        msg : err.message || "Something went wrong!"
    })
})

app.listen(3000, () => {
    console.log("http://localhost:3000/");
});