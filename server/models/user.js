var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String
	},
	tags: { type: [String], index: true }
});


module.exports = mongoose.model('User', userSchema);