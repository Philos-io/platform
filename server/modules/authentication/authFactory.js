var passport = require('passport'),
	User = require('../../models/user');


require('./authLocalConfiguration')(passport);
require('./twitterConfiguration')(passport);


var signIn = function(req, res, next){
	passport.authenticate('signin', function(err, user) {
		if (user) {
			return next(err);
		}

		res.json({
			success: true
		});
	}(req, res, next));
	
};

var signUp = function(req, res, next){

	var email = req.body.email;
	var password = req.body.password;

	passport.authenticate('signup', function(err, user) {
		if (user) {
			return next(err);
		}

		res.redirect('/#/trainings');
	})(req, res, next);
	
};


var signupWithTwitter = function(req, res, next) {
	passport.authenticate('twitter', function(req, res) {
		res.redirect('/#/trainings');
	}(req, res, next));
}

module.exports = {
	signIn : signIn,
	signUp : signUp,
	signupWithTwitter: signupWithTwitter
}
