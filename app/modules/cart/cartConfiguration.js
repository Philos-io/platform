/*
* Login module
*/

(function(){
'use strict';

	function configuration($routeProvider) {
		$routeProvider
		    .when('/cart', {
		      	controller: 'CartController',
				templateUrl: 'views/cart.html'
		    });
	}

	angular
		.module('cart', [])
		.config(['$routeProvider',configuration]);
})();