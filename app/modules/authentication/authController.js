/*
* Authentication controller
*/

(function(){
'use strict';
	
	function AuthController(CurrentUser, authFactory, $log) {

		this.email = 'davy@philos.io';
		this.password = 'test';

		this.signIn = function() {
			authFactory.signIn(this).then(success, fail);
		}

		function success(user) {
			console.log(user);
			CurrentUser = user;
			window.CurrentUser = user;
		}

		function fail(err) {
			console.log(err);
		}
	}

	angular
		.module('authentication')
		.controller('AuthController', [
				'CurrentUser',
				'authFactory',
				'$log',
				AuthController
			]);

})();