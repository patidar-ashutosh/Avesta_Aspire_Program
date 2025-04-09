import express from 'express';
import { getCinema, addCinema, updateCinema, deleteCinema } from './cinemaController.js';
import { validateCinema } from './cinemaValidation.js';
const cinemaRouter = express.Router();

// Get cinema API
cinemaRouter.get('/', getCinema);

// Add cinema API
cinemaRouter.post('/', validateCinema, addCinema);

// Update cinema API
cinemaRouter.put("/:cinemaCode", validateCinema, updateCinema);

// Delete cinema API
cinemaRouter.delete("/:cinemaCode", deleteCinema);

export {cinemaRouter};