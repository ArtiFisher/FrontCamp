var mongoose = require('mongoose');
var Article = require('../models/article');

function saveArticle(req, cb){
  var inputObj = req.body;
  req.file && (inputObj.picture = req.file.filename);
  new Article(inputObj).save(cb);
}

module.exports = saveArticle;
