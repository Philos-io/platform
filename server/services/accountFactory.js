var User = require('../models/user'),
	Company = require('../models/company');
/*
* 
*/
var getAccount = function(id, done){
	User.findById(id, function(err, account){
		done(account);
	});
};

/*
* 
*/
var create = {
	user: function(info, done){
		User.findOne({email: info.email}, function(err, user){
			// if (err) {
			// 	throw err;
			// }

			if (user) {
				done(user);
			}

			var user = new User();

			user.firstName = info.firstName;
			user.lastName = info.lastName;
			user.email = info.email;

			user.save(function(err){			
				if (err) {console.log(err)}
				done(user);
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
var createAccount = function(accountInfo, callback){
	create[accountInfo.type](accountInfo, callback);
};

/*
* 
*/
var updateAccount = function(info, done){
	console.log(Account.findOne, info);

	Account.findOne({ _id: info._id}, function (err, account) {
		if (err) done(err);

		account = info;
		account.save(function(err){
			done(account);
		});
	});
};

/*
* 
*/
var deleteAccount = function(id, done){
	User.findByIdAndRemove(id, function(err, result){
		if(err) throw err;
		done();
	});
};

module.exports = {
	get: getAccount,
	create: createAccount,
	update: updateAccount,
	delete: deleteAccount
}