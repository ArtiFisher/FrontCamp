var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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

module.exports = Article;
