/*
* All the routes should be inside this file
*/
module.exports = function(app, passport, parse) {
	require('../modules/authentication/authRoutes')(app, passport, parse);
}