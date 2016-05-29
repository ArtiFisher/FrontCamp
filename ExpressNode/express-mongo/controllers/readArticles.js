var mongoose = require('mongoose');
var articleSchema = require('../modules/article');
var Article = mongoose.model('Article', articleSchema);

function load(callback){
  return Article.find({}, callback);
}

module.exports = load;
