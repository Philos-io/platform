/*
* Login module
*/

(function(){
'use strict';

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
		.config(['$routeProvider',configuration]);
})();