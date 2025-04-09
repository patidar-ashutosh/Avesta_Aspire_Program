var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails');

// router.param(('movieId'), (req, res, next) => {

// });

function requireJSON(req, res, next) {
    if(!req.is("application/json")) {
        res.json({
            msg : "Content type must be application/json"
        })
    } else {
        next();
    }
} 

/* GET movie page. */

router.get('/top_rated', (req, res, next) => {
    let page = req.query.page;
    if(!page) {
        page = 1;
    }

    const results = movieDetails.sort( (a,b) => {
        return b.vote_average - a.vote_average;
    })

    let indexToStartPage = (page - 1) * 20;
    res.json(results.slice(indexToStartPage, indexToStartPage + 19));
})

router.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId;

    const results = movieDetails.find( (singleMovie) => {
        return singleMovie.id === Number(movieId);
    })

    if(!results) {
        res.json({
            msg : "Movie Id is not found"
        });
    } else {
        res.json(results);
    }
})

router.post('/:movieId/rating', requireJSON, (req, res, next) => {
    const movieId = req.params.movieId;
    const userRating = req.body.value;

    if(userRating < 0.5 || userRating > 10) {
        res.json({
            msg : "Rating must be between 0.5 and 10"
        })
    } else {
        res.json({
            msg : "Thank you for submitting your rating.",
            status_code : 200
        })
    }
})

router.delete('/:movieId/rating', requireJSON, (req, res, next) => {
    res.json({
        msg : "Rating deleted!"
    })
})

module.exports = router;
