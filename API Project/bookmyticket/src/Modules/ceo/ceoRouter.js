import express from 'express';
import { getTopTenCustomers, getTotalNumberOfBookingByCinema, getUniqueCustomers, getCustomerBySelectedMovieAndCinema } from './ceoController.js';
const ceoRouter = express.Router();

// top 10 customers
ceoRouter.get("/topTenCustomers", getTopTenCustomers);

// the cinema wise total no. of bookings
ceoRouter.get("/cinemaBooking", getTotalNumberOfBookingByCinema);

// get the unique customers
ceoRouter.get("/uniqueCustomers", getUniqueCustomers);

// get customers by the selected movie and selected cinema hall
ceoRouter.get("/searchCustomers", getCustomerBySelectedMovieAndCinema);

export {ceoRouter};