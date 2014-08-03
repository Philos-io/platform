var express         = require('express'),
	path            = require('path'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    logger          = require('morgan'),
    session         = require('express-session');

module.exports = function(app, config){
	// Add middlewares
	app.use(logger('dev'));
    app.use(bodyParser());
    app.use(cookieParser());
    app.use(session({secret: 'philos'}));
    //app.use(passport.initialize());
    //app.use(passport.session());
    app.use(express.static(path.join(__dirname, config.defaultDirectory)));
};

