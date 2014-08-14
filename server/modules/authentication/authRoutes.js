/*
* All the routes for authentication will be handle here
*/
var AuthFactory = require('./authFactory');

module.exports = function(app, passport){
	app.post('/signin', AuthFactory.signIn);

	app.post('/signup', AuthFactory.signUp);
}

