import { customerQuery } from "./customerModel.js";

// Handle fetching movies show by city
const getMovieByCityName = async (req, res, next) => {
    try {
        const cityName = req.params.cityName;
        const data = await customerQuery.getMovieByCityNameQuery(cityName);

        if(data.length == 0) {
            res.status(404).json({
                rejectedMsg : `No movie is running in ${cityName}.`
            })
        } else {
            res.send(data);
        }
    } catch(err) {
        next(err);
    }
}

// Handle fetching movie by selected cinema hall
const getMovieByCinemaHall = async (req, res, next) => {
    try {
        const cinemaHallName = req.params.cinemaHallName;

        const data = await customerQuery.getMovieByCinemaHallQuery(cinemaHallName);

        if(data.length == 0) {
            res.status(404).json({
                rejectedMsg : `${cinemaHallName} name is not present.`
            })
        } else {
            res.send(data);
        }
    } catch(err) {
        next(err);
    }
}

// Handle fetching movie by name
const getMovieByName = async (req, res, next) => {
    try {
        const movieName = req.params.name;
        const data = await customerQuery.getMovieByNameQuery(movieName);
        
        if(data.length != 0) {
            res.send(data);
        } else {
            res.status(404).json({
                rejectedMsg : `${movieName} movie is not present.`
            })
        }
    } catch(err) {
        next(err);
    }
}

// Handle fetching show seating plan
const getShowSeatingPlan = async (req, res, next) => {
    try {
        const {cityName, movieName, cinemaName, cinemaHallName, showId} = req.query;

        const data = await customerQuery.getShowSeatingPlanQuery({cityName, movieName, cinemaName, cinemaHallName, showId});

        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle fetching top ten actor with maximum number of movies
const getTopTenActorWithMaxMovies = async (req, res, next) => {
    try {
        const data = await customerQuery.getTopTenActorWithMaxMoviesQuery();

        res.send(data); 
    } catch(err) {
        next(err);
    }
}

// Handle fetching movie by selected year
const getMovieByYear = async (req, res, next) => {
    try {
        const data = await customerQuery.getMovieByYearQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

export {
    getMovieByCityName,
    getMovieByCinemaHall,
    getMovieByName,
    getShowSeatingPlan,
    getTopTenActorWithMaxMovies,
    getMovieByYear
}