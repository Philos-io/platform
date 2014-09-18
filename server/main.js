var express = require('express'),
	passport = require('passport'),
	app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')(env);

require('./config/express')(app, config, passport);
//require('./config/mongoose')(config);
require('./config/routes')(app, passport);





var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

passport.use(new TwitterStrategy({
    consumerKey: 'yFDw1dYkawNsCBvC1CJzOFeTZ',
    consumerSecret: 'DOfQ6AMQquiTAPCyCquRmMNXyug2eQ83SFWzh1uOxbt63M0il4',
    callbackURL: "http://locahost:9000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({ 'twitter.displayName' : profile.displayName }, function(err, user) {
        // if there are any errors, return the error
        if (err){
            return done(err);
        }

        // check to see if theres already a user with that email
        if (user) {
            return done(null, false, user);
        } else {

          console.log(profile._json);
          // if there is no user with that email
          // create the user
          var newUser            = new User();

          // set the user's local credentials
          newUser.local.email    = "";                    
          newUser.fullName = profile._json.name;
          console.log(profile._json.name);
          newUser.twitter.displayName = profile._json.displayName;
          newUser.twitter.id = profile.id;
          console.log(profile._json.id);
          newUser.twitter.image = profile._json.profile_image_url;
          console.log(profile._json.profile_image_url);
          newUser.twitter.location = profile._json.location;
          console.log(profile._json.location);
          newUser.twitter.language = profile._json.lang;

          
          // save the user
          newUser.save(function(err) {
            if (err)
                throw err;
            return done(null, newUser);
          });
        }

    });
  }
));























// console.log(config.port);

// if (env === 'development') {
// 	module.exports = app;	
// }else{
// 	app.listen(config.port);
// }
app.listen(config.port);