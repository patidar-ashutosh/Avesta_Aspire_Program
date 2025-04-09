var express = require('express');
var router = express.Router();

/* GET search page. */

const movies = require("../data/movies");
const people = require("../data/people");


function queryRequired(req, res, next) {
    console.log(req.query);
    const searchTerm = req.query.query;
    if(!searchTerm) {
        res.json({
            msg : "Query is required."
        })
    } else {
        next();
    }
}
  
router.use(queryRequired);

router.get('/movie', (req, res, next) => {
    const results = movies.filter( (singleMovie) => {
        let found = singleMovie.overview.includes(searchTerm) || singleMovie.title.includes(searchTerm);
        return found;
    })

    res.json({results})
})

router.get('/person', (req, res, next) => {
    const results = people.filter( (person) => {
        let found = person.name.includes(searchTerm);
        return found;
    })

    res.json({results})
})

module.exports = router;
