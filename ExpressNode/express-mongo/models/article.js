var mongoose = require('mongoose');
var connection = require('../helpers/db');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

autoIncrement.initialize(connection);

var Article = new Schema({
  title:  {
        type: String,
        required: true
      },
  author: {
        type: String,
        required: true
      },
  content:   {
        type: String,
        required: true
      },
  date: {
    type: Date,
    default: Date.now
  },
  picture: {
        type: String
      },
  tags: {
        type: Array
      }
});

Article.plugin(autoIncrement.plugin, 'Article');

var model = mongoose.model('Article', Article);

module.exports = model;
