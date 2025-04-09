var express = require('express');
var router = express.Router();
const request = require('request');

const apiBaseUrl = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'x-rapidapi-key': 'c4c18b844amshaa6d64c8bbf8516p12e477jsn078a3ee98839',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

router.use((req, res, next) => {
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  request(apiBaseUrl, (error, response) => {
    const parsedData = JSON.parse(response.body);

    res.render('index', {
      parsedData
    })
  })
});

router.get('/movie/:id', (req, res) => {
  const movieId = req.params.id;

  const getSelectedMovieUrl = {
    method: 'GET',
    url: `https://imdb-top-100-movies.p.rapidapi.com/${movieId}`,
    headers: {
      'x-rapidapi-key': 'c4c18b844amshaa6d64c8bbf8516p12e477jsn078a3ee98839',
      'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  request(getSelectedMovieUrl, (error, response) => {
    const parsedData = JSON.parse(response.body);

    res.render('single-movie', {
      parsedData
    })
  })
})

module.exports = router;