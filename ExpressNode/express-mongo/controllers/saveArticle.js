var mongoose = require('mongoose');
var articleSchema = require('../modules/article');
var Article = mongoose.model('Article', articleSchema);

function save(req, cb){
  var inputObj = req.body;
  inputObj.picture = req.file.filename;
  new Article(inputObj).save(cb);
}

module.exports = save;
