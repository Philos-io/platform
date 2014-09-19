/*
* All the routes for authentication will be handle here
*/
var AuthFactory = require('./authFactory');
var qs = require('querystring');

module.exports = function(app, passport){

	app.get('/test', function(req, res, next) {
		res.redirect('/#profile');
	});

	app.post('/signin', AuthFactory.signIn);

	app.post('/signup', AuthFactory.signUp);

	// app.get('/auth/twitter', passport.authenticate('twitter'));

	// app.get('/auth/twitter/callback', passport.authenticate('twitter'));

	// app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }),
	// function(req, res) {
	//  res.redirect('/#/profile');
	// });
	// app.get('/auth/twitter/callback',
	// 	passport.authenticate('twitter', { failureRedirect: '/' }),
	// 	function(req, res) {
	//  		res.redirect('/#profile');
	//});

	app.get('/auth/twitter',
		passport.authenticate('twitter'),
		function(req, res){
	});
		
	app.get('/auth/twitter/callback',
		passport.authenticate('twitter', { failureRedirect: '/' }),
		function(req, res) {
		 res.redirect('/#/profile');
	});

	app.get('/logout', AuthFactory.logout);
};




// app.get('/gitAuth/callback', function(req, res) {
// 	    var code = req.query.code;
// 	    if (code) {
// 	    	console.log(code);
// 	        // Then user is authentificated
// 	        //createUser(code, req, res);
// 	        res.redirect('/#/profile');
// 	    } else {
// 	        // user is not authentificated
// 	        console.log('failed to authentificate');
// 	        res.redirect('/');
// 	    }
// 	});


// 	app.get('/auth/github', function(req, res) {
// 	    var client_id = 'f344a987c3d87a83b193';

// 	    var config = qs.stringify({
// 	        scope: 'user:email',
// 	        client_id: client_id
// 	    });

// 	    res.redirect('https://github.com/login/oauth/authorize/?' + config);
// 	});

