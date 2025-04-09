import express from "express";
import {getAllCities,getAnySelectedCity,addNewCity,updateCity,deleteCity} from './cityController'
import { validateCity } from "./cityValidation";

const citiRouter = express.Router();

// get all cities API
citiRouter.get("/", getAllCities);

// get any selected city API
citiRouter.get("/:cityName", getAnySelectedCity);

// Add city API
citiRouter.post("/", validateCity, addNewCity);

// Update city API
citiRouter.put("/:cityName", validateCity, updateCity);

// Delete city API
citiRouter.delete("/:cityName", deleteCity);

export {citiRouter};