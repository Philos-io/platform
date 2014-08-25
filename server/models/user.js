/*
* User model
*/
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema 		= mongoose.Schema;

// define the schema for our user model
var userSchema = Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
    fullName: {
        type: String
    },
    local            : {
        email        : String,
        password     : String,
    },
    linkedIn         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        image        : String,
        displayName  : String,
        username     : String,
        location     : String,
        language     : String
    },
    github           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    tags: { type: [String], index: true }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
