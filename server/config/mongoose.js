var mongoose = require('mongoose');

module.exports = function(config){
	var db = mongoose.connect(config.db).connection;
	 
 	db.on('open', function(){
 		console.log('open the database connection');
 	});

 	db.on('err', function(){
 		console.log('err while connecting to the database');
 	});
};