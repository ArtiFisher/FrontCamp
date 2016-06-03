var express = require('express');
var multer = require('multer');
var upload = multer({ dest: './public/images' });
var router = express.Router();
var saver = require('../controllers/saveArticle');
var loader = require('../controllers/findArticles');

router.post('/add', upload.single('picture'), function(req, res, next) {
  saver(req, function(err, data){
    res.redirect('../../');
  });
});

router.get('/:id', function(req, res, next) {
  loader((err, data) => {
    res.render('article', { article: data[0] });
  }, { "_id": req.params.id });
});

module.exports = router;
