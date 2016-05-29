var express = require('express');
var router = express.Router();
var loader = require('../controllers/readArticles');



var callback = function(success, err){
  // console.log(success, err);
  !err ? console.log(err) : console.log(err);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  loader((err, data) => {
    res.render('index', { articles: data });
  });

});

router.get('/newArticle', function(req, res, next) {
  res.render('addingForm');
});

module.exports = router;
