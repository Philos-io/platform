var express = require('express'),
	passport = require('passport'),
	app = express(),
	Parse = require('parse').Parse;


	var key = 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef';
  	Parse.initialize('sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt', key);




var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./server/config/config')(env);

require('./server/config/express')(app, config, passport);
//require('./config/mongoose')(config);
require('./server/config/routes')(app, passport);

app.listen(config.port);