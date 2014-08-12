/*
* Login module
*/

(function(){
'use strict';
	
	function LoginController(CurrentUser, loginFactory) {

		console.log(loginFactory);

		this.email = 'davy@philos.io';
		this.password = 'this is a test';

		var credentials = {
			email: this.email,
			password: this.password,
			remember: this.remember
		}

		this.submit = function(credentials) {
			var result = loginFactory.login(credentials);
			console.log(result);
			CurrentUser = result;
			window.CurrentUser = result;
		}
	}

	function configuration($routeProvider) {
		$routeProvider	
			.when('/login', {
		      	controller: 'LoginController',
				controllerAs: 'login',
				templateUrl: 'modules/login/login.html'
		    });
	}

	angular
		.module('login', [])
		.config(['$routeProvider',configuration])
		.controller('LoginController', [
				'CurrentUser',
				'loginFactory',
				LoginController
			]);

})();