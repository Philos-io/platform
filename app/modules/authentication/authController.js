/*
* Authentication controller
*/

(function(){
'use strict';
	
	function AuthController($scope, authFactory, $rootScope, $location, $document) {

		$document.scrollTop(0, 0);

		$rootScope.displayLogin = false;

		$scope.signIn = function() {
			authFactory.signIn($scope.login).then(success, fail);
		}

		$scope.signUp = function() {
			authFactory.signUp($scope.user).then(success, fail);
		}

		$rootScope.logout = function(){
			debugger
			authFactory.logout();
			$location.path('/');	
		}

		function success(user) {
			// Set the current user object
			$rootScope.currentUser = user;

			$rootScope.auth = false;
			// then redirect the user to the trainings page
			$location.path('/trainings');
		}

		function fail(err) {
			throw err;
		}
	}

	angular
		.module('authentication')
		.controller('AuthController', [
				'$scope',
				'authFactory',
				'$rootScope',
				'$location',
				'$document',
				AuthController
			]);

})();