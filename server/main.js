var express = require('express'),
	passport = require('passport'),
	app = express(),
	Parse = require('parse').Parse;

	var masterKey = 'IX0pW5PBH1AkSfvOcN4LEjeDWLyGp6DlLeEacIgL';
	var key = 'LnV5YM6ZtvYZ7nrI2tx58IN8ABWTb67KgUJADAef';
  	Parse.initialize('sNUJR4kRaArwjeBtlkdcdSm5cmDYeHidBQIyIYVt', key);



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config')(env);

require('./config/express')(app, config, passport);
//require('./config/mongoose')(config);
require('./config/routes')(app, passport);

	// var query = new Parse.Query(Parse.User);


 	// query.get('QxakRiCe23',{
  //   	success: function(user){	

  //   		Parse.User.logIn('davy@philos.io', 'getbetter2', {
		// 	  success: function(user) {
		// 	  	console.log('inside success', Parse.User.current());
	 //        	user.set('firstname', 'davy');
	 //        	user.set('twitter', 'davyengone');

	 //        	user.save();
		// 	  },
		// 	  error: function(user, error) {
		// 	    // The login failed. Check error to see why.
		// 	  }
		// 	});
	 //    },
	 //    error: function(result, error){
	 //    	console.log('inside error');
	 //      console.log(error);
	 //    }
  // 	});
	 
	

// console.log(config.port);

// if (env === 'development') {
// 	module.exports = app;	
// }else{
// 	app.listen(config.port);
// }
app.listen(config.port);