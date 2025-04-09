import { cityQuery } from "./cityModel.js";

// Handle fetching all cities
const getAllCities = async (req, res, next) => {
    try {
        const data = await cityQuery.getAllCitiesQuery();
        res.send(data);
    } catch (err) {
        next(err);
    }
}

// Handle fetching any selected city
const getAnySelectedCity = async (req, res, next) => {
    try {
        const cityName = req.params.cityName;
        
        const data = await cityQuery.getAnySelectedCityQuery(cityName);

        if(data.length == 0) { // means city not found
            res.status(404).json({
                rejectedMsg : `${cityName} is not found.`
            })
        } else {
            res.send(data[0]);
        }
    } catch (err) {
        next(err);
    }
}

// Handle adding new city
const addNewCity = async (req, res, next) => {
    try {
        const {name, state} = req.body;

        const data = await cityQuery.getSearchedCity(name);

        if(data.length !== 0) { // means city already exists
            res.status(404).json({
                rejectedMsg : `${name} city name is already exists.`
            })
        } else {
            await cityQuery.addNewCityQuery(name,state);
            res.status(200).json({
                successMsg : `City name : ${name} is inserted successfully.`
            })
        }
    } catch (err) {
        next(err);
    }
}

// Handle update city
const updateCity = async (req, res, next) => {
    try {
        const cityName = req.params.cityName;
        const {name , state} = req.body;

        const data = await cityQuery.updateCityQuery(name, state, cityName);

        const isDataUpdate = data.affectedRows == 0 ? false : true;

        if(isDataUpdate) {
            res.status(200).json({
                successMsg : `${cityName} is now update to ${name} successfully.`
            })
        } else {
            res.status(404).json({
                rejectedMsg : `${name} city name not found.`
            })
        }
    } catch (err) {
        next(err);
    }
}

// Handle delete any city
const deleteCity = async (req, res, next) => {
    try{
        const cityName = req.params.cityName;
        const data = await cityQuery.deleteCityQuery(cityName);

        if(data.affectedRows != 0) {
            res.status(200).json({
                successMsg : `${cityName} is deleted successfully.`
            })
        } else {
            res.status(404).json({
                rejectedMsg : `${cityName} city name is not found.`
            })
        }
    } catch(err) {
        next(err);
    }
}

export {
    getAllCities,
    getAnySelectedCity,
    addNewCity,
    updateCity,
    deleteCity
}