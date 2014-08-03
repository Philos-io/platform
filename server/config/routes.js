var UserFactory = require('../services/userFactory');
var WorkshopFactory = require('../services/workshopFactory');

module.exports = function(app) {
	
	// Register route
	var register = app.route('/register');
	register.post(function(req, res) {
		UserFactory.register(req.body, res);	
	});

	// Signup route
	var signup = app.route('/signup');
	signup.post(function(req, res){
		UserFactory.signUp(req.body, res);
	});

	// Workshops
	var workshops = app.route('/workshops');

	workshops.get(function(req, res){
		WorkshopFactory.getAll(res);
	});

	workshops.post(function(req, res){
		WorkshopFactory.add(req.body, res);
	});
}