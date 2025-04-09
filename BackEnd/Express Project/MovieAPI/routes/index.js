var express = require('express');
var router = express.Router();

const movie = require('../data/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular', (req, res, next) => {
  let page = req.query.page;
  if(page === undefined) {
    page = 1;
  }

  let results = movie.filter( (singleMovie) => {
    return singleMovie.most_popular;
  })

  const indexToStartPage = (page - 1) * 20;
  results = results.slice(indexToStartPage, indexToStartPage + 19);

  res.json({
    page,
    results
  });

})

module.exports = router;
