import express from 'express';
import {getMovieByCityName, getMovieByCinemaHall, getMovieByName, getShowSeatingPlan, getTopTenActorWithMaxMovies, getMovieByYear } from './customerController.js';
const customerRouter = express.Router();

// list of movies showing in search city.
customerRouter.get("/cityname/:cityName", getMovieByCityName);

// list of movies showing in the selected cinema hall.
customerRouter.get("/cinemaname/:cinemaHallName", getMovieByCinemaHall);

// search a movie by name
customerRouter.get("/moviename/:name", getMovieByName);

// view the show seating plan
customerRouter.get('/booktickets', getShowSeatingPlan);

// top 10 actors with maximum no. of movies
customerRouter.get("/topTenActors", getTopTenActorWithMaxMovies);

// list of movies released in a selected year
customerRouter.get("/movieByYear", getMovieByYear);


export {customerRouter};