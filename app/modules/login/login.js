/*
* Login module
*/

(function(){
'use strict';
	
	function LoginController(CurrentUser, loginService) {
		CurrentUser = CurrentUser || {name: 'davy'};
      	window.CurrentUser = CurrentUser;
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
				LoginController
			]);

})();