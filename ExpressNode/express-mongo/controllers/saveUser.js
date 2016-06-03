var mongoose = require('mongoose');
var User = require('../models/user');

function saveUser(req, cb){
  new User({
  	username: req.body.username,
  	password: req.body.password
  }).save(cb);
}

module.exports = saveUser;
