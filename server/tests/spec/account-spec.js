var User 		= require('../../models/user');
var Company 		= require('../../models/company');
var AccountFactory = require('../../services/accountFactory');
mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/philos');


describe('Account', function() {
	
	var account = null, id;
	
	beforeEach(function () {
		
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
			id = account._id;
			done();
		});
	});

	it('Update account by id', function(done) {
		console.log(id);
		AccountFactory.get(id, function(account){
			account.firstName = "Davy Sydney";
			account.lastName = "Engone Nze";

			AccountFactory.update(account, function(result) {
				console.log(result);
				expect(result.firstName).toBe('Davy Sydney');
				expect(result.lastName).toBe('Engone Nze');
				expect(result.email).toBe('davy@philos.io');
				done();
			});
		});
	});

	xit('Delete account by id', function() {
		AccountFactory.delete(id);
		// Query the db to check if the user has been deleted
	});

	xit('Get an account by id', function(done) {
		AccountFactory.get(id, function(account){
			expect(account.firstName).toBe('Davy');
			expect(account.lastName).toBe('Engone');
			expect(account.email).toBe('davy@philos.io');
			done();
		});
	});
});