/*
* Profile module 
*/

(function(){
	'use strict';


	function configuration($routeProvider){
		$routeProvider
			.when('/profile', {
				controller: 'ProfileController',
				templateUrl: 'views/profile.html'
			});
	}

	angular.module('profile', [])
		.config( ['$routeProvider', configuration]);
})();