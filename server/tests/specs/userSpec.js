var User = require('../../models/user.js');

describe('User', function() {
	it('User should have a firstname', function (done) {
		var user = new User();
		expect(user).toBe(6);
	});
});