var passport = require('passport'),
	User = require('../../models/user');


require('./authLocalConfiguration')(passport);


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
			console.log(err);
			return next(err);
		}

		res.json({
			success: true
		});
	})(req, res, next);
	
};

module.exports = {
	signIn : signIn,
	signUp : signUp
}
