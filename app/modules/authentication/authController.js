/*
* Authentication controller
*/

(function(){
'use strict';
	
	function AuthController($scope, CurrentUser, authFactory, $rootScope, $location) {

		// User objedt
		$scope.user = {
			firstname: 'davy',
			lastname: 'engone',
			email: 'davy@philos.io',
			password: 'getbetter2',
			mobile: '+32488790802',
			address1: 'Dorpsplein 7/2',
			address2: '',
			postalcode: '3080',
			city: 'Tervuren'
		};

		$rootScope.auth = true;


		$scope.signIn = function() {
			authFactory.signIn($scope.login).then(success, fail);
		}

		$scope.signUp = function() {
			authFactory.signUp($scope.user).then(success, fail);
		}

		$scope.logout = function(){
			authFactory.logout();	
		}

		function success(user) {
			// Set the current user object
			CurrentUser = user;
			CurrentUser.picture = 'images/cyrille.jpg';

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
				'CurrentUser',
				'authFactory',
				'$rootScope',
				'$location',
				AuthController
			]);

})();