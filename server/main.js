var express = require('express'),
	passport = require('passport'),
	app = express(),
	Parse = require('parse').Parse;

Parse.initialize('sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt', 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')(env);

require('./config/express')(app, config, passport);
//require('./config/mongoose')(config);
require('./config/routes')(app, passport, Parse);

// console.log(config.port);

// if (env === 'development') {
// 	module.exports = app;	
// }else{
// 	app.listen(config.port);
// }
app.listen(config.port);