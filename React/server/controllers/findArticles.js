var mongoose = require('mongoose');
var Article = require('../models/article');

function findArticles(callback, params){
  !params && (params = {});
  return Article.find(params, callback);
}

module.exports = findArticles;
