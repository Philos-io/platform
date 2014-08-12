/*
* Login module
*/

(function(){
'use strict';
	
	function LoginController(CurrentUser, loginFactory) {

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

	function configuration($routeProvider) {
		$routeProvider	
			.when('/login', {
		      	controller: 'LoginController',
				controllerAs: 'auth',
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