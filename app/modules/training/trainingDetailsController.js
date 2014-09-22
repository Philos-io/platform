/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($scope, $routeParams, trainingFactory, $location, $document, $window, $rootScope, CurrentUser) {

		$scope.session = trainingFactory.getTrainingById($routeParams.training_id)[0];

		$document.scrollTop(0, 0);

		$scope.session.numberAttendees = $scope.session.attendees.length;

		/*
		* Register for a training
		*/
		$scope.register = function (){

			$location.url('https://ti.to/oneweekoneproject/nodejs/');

			// if undefined redirect the user to the login page
			// if (!$rootScope.currentUser) {
			// 	$location.path('/signin');
			// }

			// var currentUser = $rootScope.currentUser;

			// if (!currentUser.sessions) {
			// 	currentUser.sessions = [];
			// }

			// // Add the current session into the user upcoming sessions
			// currentUser.sessions.push($scope.session);

			// $location.path('/profile');
			// Redirect the user to eventbrite.com


			// For now redirect the user to the registration page 
			//$window.location.href = 'http://www.philos.io';
		};
	}

	angular
		.module('training')
		.controller('TrainingDetailsController', [
				'$scope',
				'$routeParams',
				'trainingFactory',
				'$location',
				'$document',
				'$window',
				'$rootScope',
				'CurrentUser',
				TrainingDetailsController
			]);

})();