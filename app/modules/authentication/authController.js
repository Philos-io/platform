/*
* Authentication controller
*/

(function(){
'use strict';
	
	function AuthController(CurrentUser, loginFactory) {

		this.email = 'davy@philos.io';
		this.password = 'test';

		this.signIn = function(credentials) {
			var result = loginFactory.signIn(credentials).then(function(user){
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