// var UserFactory = require('../services/userFactory');
var AccountFactory  = require('../services/accountFactory');
var AuthFactory 	= require('../services/authFactory');

module.exports = function(app) {
	
	// Register route
	// var register = app.route('/register');
	// register.post(function(req, res) {
	// 	UserFactory.register(req.body, res);	
	// });

	var api = app.route('/api');
	api.get(function(req, res){
		AccountFactory.create(newAccount, function(user){
			console.log(user);
			res.json(user);
		});
	});

	var login = app.route('/login');
	login.post(AuthFactory.login);

	// // Signup route
	// var signup = app.route('/signup');
	// signup.post(function(req, res){
	// 	UserFactory.signUp(req.body, res);
	// });

	// // Workshops
	// var workshops = app.route('/workshops');

	// workshops.get(function(req, res){
	// 	WorkshopFactory.getAll(res);
	// });

	// workshops.post(function(req, res){
	// 	WorkshopFactory.add(req.body, res);
	// });
}