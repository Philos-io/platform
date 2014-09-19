var passport = require('passport'),
	User = require('../../models/user');
  Parse = require('parse').Parse;

  // Parse.initialize('sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt', 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef');



require('./authLocalConfiguration')(passport);
require('./twitterConfiguration')(passport, Parse);


var signIn = function(req, res, next){
	passport.authenticate('signin', function(err, user, info) {
	    if (err) { 
	    	return next(err); 
	    }
	    
	    if (!user) { 
	    	return res.status(401).send(info);
		}

	    req.logIn(user, function(err) {
	      if (err) { 
	      	return next(err); 
	      }
	      return res.status(401).send({user: req.user,info: info});
	    });
	 })(req, res, next);
};

var signUp = function(req, res, next){
	passport.authenticate('signup', function(err, user) {
		if (user) {
			return next(err);
		}

		res.redirect('/#/trainings');
	})(req, res, next);
	
};


var twitter = function(req, res, next) {
	console.log('inside twitter callback',req.body);

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

var logout = function(req, res) {
	req.logout();
  	res.redirect('/');
}

module.exports = {
	signIn : signIn,
	signUp : signUp,
	twitter: twitter,
	logout: logout
}
