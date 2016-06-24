var express = require('express');
var router = express.Router();
var saveArticle = require('../controllers/saveArticle');
var findArticles = require('../controllers/findArticles');

router.get('/', function(req, res) {
  findArticles((err, data) => {
    res.json(data);
  });
});

router.get('/:id', function(req, res) {
	findArticles((err, data) => {
		res.json(err || !data || data.length > 1 ? data : data[0]);
	}, {'_id': req.params.id});
});

router.post('/', function(req, res) {
  saveArticle(req, function(err, data){
  	res.json(data);
  });
});

module.exports = router;
