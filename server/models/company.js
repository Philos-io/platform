var mongoose = require('mongoose');


var companySchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	contact: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
});


module.exports = mongoose.model('Company', companySchema);