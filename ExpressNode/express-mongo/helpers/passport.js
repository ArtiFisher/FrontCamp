var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var findUser = require('../controllers/findUser');

passport.use(new LocalStrategy(function(username, password, done){
  findUser({ username : username }, function(err, user){
    err && done(err);
    if(!user || user.password != password){
      done(null, false);
    }
    else{
      done(null, user);
    }
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});


passport.deserializeUser(function(id, done) {
  findUser({ _id: id }, function(err,user){
    err ? done(err) : done(null, user);
  });
});

module.exports = passport;