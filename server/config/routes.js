/*
* All the routes should be inside this file
*/
module.exports = function(app, passport) {
	require('../modules/authentication/authRoutes')(app, passport);

	app.get('*', function(req, res, next){
		res.redirect('/');
	});
}