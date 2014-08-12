var express = require('express'),
	app = express();

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')(env);

require('./config/express')(app, config);
//require('./config/mongoose')(config);
require('./config/routes')(app);

// console.log(config.port);

// if (env === 'development') {
// 	module.exports = app;	
// }else{
// 	app.listen(config.port);
// }


app.listen(config.port);