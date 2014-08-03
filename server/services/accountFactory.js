var User = require('../models/user'),
	Company = require('../models/company');
/*
* 
*/
var getAccount = function(id){

};

/*
* 
*/
var create = {
	user: function(info, done){
		User.findOne({email: info.email}, function(err, user){
			if (err) {
				throw err;
			}

			// if (user) {
			// 	throw 'User already existed';
			// }

			var user = new User();

			user.firstName = info.firstName;
			user.lastName = info.lastName;
			user.email = info.email;

			user.save(function(err){
				if (err) {throw err}
				console.log("inside save");				
			});
		});
	},

	company: function(info){
		console.log('create a company account');
	}
}

/*
* 
*/
var createAccount = function(accountInfo){
	var info = create[accountInfo.type](accountInfo);

	return info;
};

/*
* 
*/
var updateAccount = function(){

};

/*
* 
*/
var deleteAccount = function(){

};

module.exports = {
	get: getAccount,
	create: createAccount,
	update: updateAccount,
	delete: deleteAccount
}