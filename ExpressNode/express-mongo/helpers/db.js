var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/Blog');

module.exports = connection;