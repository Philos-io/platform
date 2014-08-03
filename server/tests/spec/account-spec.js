var User 		= require('../../models/user');
var Company 		= require('../../models/company');
var AccountFactory = require('../../services/accountFactory');
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/philos');


describe('Account', function() {
	
	var account = null, id;
	
	beforeEach(function () {
		// Maybe cleaning the database
	});

	it('Create an account for a user', function(done) {

		var newAccount = {
			firstName: "Davy",
			lastName: "Engone",
			email: "davy@philos.io",
			type: 'user'
		};
		
		AccountFactory.create(newAccount, function(account){
			expect(account.firstName).toBe('Davy');
			expect(account.lastName).toBe('Engone');
			expect(account.email).toBe('davy@philos.io');
			expect(account._id).toBeDefined();
			done();
		});
		
	});

	xit('Update account by id', function() {
		user = AccountFactory.get(id);
	});

	xit('Delete account by id', function() {
		AccountFactory.delete(id);
		// Query the db to check if the user has been deleted
	});

	xit('Get an account by id', function() {
		user = AccountFactory.get(id);
	});
});