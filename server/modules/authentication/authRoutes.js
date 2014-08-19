/*
* All the routes for authentication will be handle here
*/
var AuthFactory = require('./authFactory');

module.exports = function(app, passport){
	app.post('/signin', AuthFactory.signIn);

	app.post('/signup', AuthFactory.signUp);

	app.get('/auth/twitter', passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', AuthFactory.signupWithTwitter);

	app.get('/logout', AuthFactory.logout);
}

