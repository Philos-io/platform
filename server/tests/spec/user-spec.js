var User = require('../../models/user.js');

describe('User', function() {
	describe('User properties', function() {

		var user = null;

		beforeEach(function () {
			user = new User();
		});

		it('User should have a firstname', function () {
			expect(user.firstname).toBeDefined();
		});
	});
});