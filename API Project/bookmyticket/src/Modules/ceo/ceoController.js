import { ceoQuery } from './ceoModel.js'

// Handle fetching top 10 customers
const getTopTenCustomers = async (req, res, next) => {
    try {
        const data = await ceoQuery.getTopTenCustomersQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching total number of booking by cinema code
const getTotalNumberOfBookingByCinema = async (req, res, next) => {
    try {
        const data = await ceoQuery.getTotalNumberOfBookingByCinemaQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching unique customers
const getUniqueCustomers = async (req, res, next) => {
    try {
        const data = await ceoQuery.getUniqueCustomersQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching customers by movie and selected cinema hall
const getCustomerBySelectedMovieAndCinema = async (req, res, next) => {
    try {
        const {cinemaName, movieName} = req.query;

        const data = await ceoQuery.getCustomerBySelectedMovieAndCinemaQuery(cinemaName, movieName);

        if(data.length != 0) {
            res.send(data);
        } else {
            res.status(404).json({
                rejectedMsg : `No data found.`
            })
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