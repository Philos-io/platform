/*
* Authentication controller
*/

(function(){
'use strict';
	
	function AuthController(CurrentUser, loginFactory) {

		this.email = 'davy@philos.io';
		this.password = 'this is a test';

		var credentials = {
			email: this.email,
			password: this.password,
			remember: this.remember
		}

		this.login = function(credentials) {
			var result = loginFactory.login(credentials).then(function(user){
				console.log(user);
				CurrentUser = user;
				window.CurrentUser = user;
			});
		}
	}

	angular
		.module('authentication')
		.controller('AuthController', [
				'CurrentUser',
				'authFactory',
				AuthController
			]);

})();