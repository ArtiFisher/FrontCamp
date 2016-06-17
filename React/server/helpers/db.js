var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017/Blog');
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

module.exports = connection;