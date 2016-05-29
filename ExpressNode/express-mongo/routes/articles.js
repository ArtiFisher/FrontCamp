var express = require('express');
var multer = require('multer');
var upload = multer({ dest: './public/images' });
var router = express.Router();
var saver = require('../controllers/saveArticle');

router.post('/add', upload.single('picture'), function(req, res, next) {
  saver(req, function(err, data){
    res.json(req.body);
  });
});

module.exports = router;
