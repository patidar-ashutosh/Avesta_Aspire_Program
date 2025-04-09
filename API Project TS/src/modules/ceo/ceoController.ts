import { ceoQuery } from './ceoModel';
import { Request, Response, NextFunction } from 'express';

// Handle fetching top 10 customers
const getTopTenCustomers = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try {
        const data = await ceoQuery.getTopTenCustomersQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching total number of booking by cinema code
const getTotalNumberOfBookingByCinema = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try {
        const data = await ceoQuery.getTotalNumberOfBookingByCinemaQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching unique customers
const getUniqueCustomers = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try {
        const data = await ceoQuery.getUniqueCustomersQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching customers by movie and selected cinema hall
const getCustomerBySelectedMovieAndCinema = async (req : Request, res : Response, next : NextFunction) : Promise<void> => {
    try {
        const {cinemaName, movieName} = req.query;

        if(typeof cinemaName === "string" && typeof movieName === "string") {
            const data = await ceoQuery.getCustomerBySelectedMovieAndCinemaQuery(cinemaName, movieName);
    
            if(data.length != 0) {
                res.send(data);
            } else {
                res.status(404).json({
                    rejectedMsg : `No data found.`
                })
            }
        } else {
            res.status(400).json({ error: "Invalid query parameters" });
        }
    } catch(err) {
        next(err);
    }
}

export {
    getTopTenCustomers,
    getTotalNumberOfBookingByCinema,
    getUniqueCustomers,
    getCustomerBySelectedMovieAndCinema
}