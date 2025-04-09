import { cinemaQuery } from './cinemaModel.js';

// Handle fetching cinema
const getCinema = async (req, res, next) => {
    try {
        const data = await cinemaQuery.getCinemaQuery();
        res.send(data);
    } catch(err) {
        next(err);
    }
}

// Handle adding cinema
const addCinema = async (req, res, next) => {
    try {
        const {code, name, cityId, address} = req.body;
        
        const data = await cinemaQuery.addCinemaQuery({code, name, cityId, address});

        res.status(200).json({
            successMsg : `Cinema : ${name} is inserted successfully.`
        });
    } catch(err) {
        next(err);
    }
}

// Handle updating cinema
const updateCinema = async (req, res, next) => {
    try {
        let cinemaCode = req.params.cinemaCode;
        const {code, name, cityId, address} = req.body;

        const data = await cinemaQuery.updateCinemaQuery({code, name, cityId, address, cinemaCode});

        const isDataUpdate = data.affectedRows == 0 ? false : true;

        if(isDataUpdate) {
            res.status(200).json({
                successMsg : `Cinema : ${name} is update successfully.`
            });
        } else {
            res.status(404).json({
                rejectedMsg : `${cinemaCode} cinema name is not present.`
            })
        }
    } catch(err) {
        next(err);
    }
}

// Handle delete cinema
const deleteCinema = async (req, res, next) => {
    try {
        const cinemaCode = req.params.cinemaCode;

        const data = await cinemaQuery.deleteCinemaQuery(cinemaCode);

        if(data.affectedRows != 0) {
            res.status(200).json({
                successMsg : `Cinema : ${cinemaCode} is deleted successfully.`
            })
        } else {
            res.status(404).json({
                rejectedMsg : `${cinemaCode} cinema name is not present.`
            })
        }
    } catch(err) {
        next(err);
    }
}

export {
    getCinema,
    addCinema,
    updateCinema,
    deleteCinema
}