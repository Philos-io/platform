/*
* Authentication controller
*/

(function(){
'use strict';
	
	function AuthController($scope, cartFactory, $rootScope, $location) {

		
	}

	angular
		.module('cart')
		.controller('CartController', [
				'$scope',
				'cartFactory',
				'$rootScope',
				'$location',
				AuthController
			]);

})();