/*
* All the routes should be inside this file
*/
module.exports = function(app, passport) {
	require('../modules/authentication/authRoutes')(app, passport);
}