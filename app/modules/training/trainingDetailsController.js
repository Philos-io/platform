/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($scope, $routeParams, CurrentUser, trainingFactory, $rootScope, $document) {

		$scope.session = trainingFactory.getTrainingById(parseInt($routeParams.training_id))[0];

		$document.scrollTop(0, 0);

		$scope.session.numberAttendees = $scope.session.attendees.length;

		/*
		* Register for a training
		*/
		$scope.register = function (){

			// if the user in not logged then redirect to the login page

			// Add the current user into the list of attendees for the current session
			CurrentUser.upcomingSessions.push($scope.session.id);
			// Add the session into the list of upcoming session fot the current user
			$scope.session.attendees.push(CurrentUser);
			$scope.session.numberAttendees++;
			// redirect the user to eventbrite for payment

			// Broadcast the information around the whole application
		};
	}

	angular
		.module('training')
		.controller('TrainingDetailsController', [
				'$scope',
				'$routeParams',
				'CurrentUser',
				'trainingFactory',
				'$rootScope',
				'$document',
				TrainingDetailsController
			]);

})();