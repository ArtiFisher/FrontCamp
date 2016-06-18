var mongoose = require('mongoose');
var connection = require('../helpers/db');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(connection);

var Article = new mongoose.Schema({
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

module.exports = mongoose.model('Article', Article);
