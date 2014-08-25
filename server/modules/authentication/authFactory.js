var passport = require('passport'),
	User = require('../../models/user');


require('./authLocalConfiguration')(passport);
require('./twitterConfiguration')(passport);


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


var signupWithTwitter = function(req, res, next) {
	passport.authenticate('twitter', function(err, user) {
		res.redirect('/#/trainings');
	}(req, res, next));
}

var logout = function(req, res) {
	req.logout();
  	res.redirect('/');
}

module.exports = {
	signIn : signIn,
	signUp : signUp,
	signupWithTwitter: signupWithTwitter,
	logout: logout
}
