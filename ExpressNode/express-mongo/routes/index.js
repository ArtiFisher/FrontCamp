var express = require('express');
var router = express.Router();
var loader = require('../controllers/findArticles');

var callback = function(success, err){
  !err ? console.log(err) : console.log(err);
}

router.get('/', function(req, res, next) {
	console.log(req.isAuthenticated(), req.isUnauthenticated());
  loader((err, data) => {
    res.render('index', { articles: data, auth: req.isAuthenticated() });
  });
});

router.get('/newArticle', function(req, res, next) {
  res.render('addingForm');
});

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('../');
});

module.exports = router;
