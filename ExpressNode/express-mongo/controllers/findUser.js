var mongoose = require('mongoose');
var User = require('../models/user');

function findUser(params, callback){
  !params && (params = {});
  User.findOne(params, callback);
}

module.exports = findUser;
