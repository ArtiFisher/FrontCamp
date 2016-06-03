var express = require('express');
var router = express.Router();
var passport = require('../helpers/passport');
var saveUser = require('../controllers/saveUser');

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/adduser', function(req, res, next) {
  saveUser(req, function(err, data){
    res.redirect('../');
  });
});

router.post('/validate', function(req, res, next) {
  passport.authenticate('local', { successRedirect: '../../',
   failureRedirect: '/login' })(req, res, next);
});

module.exports = router;
