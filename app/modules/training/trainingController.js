/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($scope, $window, CurrentUser, trainingFactory) {

		if (!$window.CurrentUser) {
			CurrentUser.fullname = 'Cyrille Pastorek';
	      	CurrentUser.picture = 'images/cyrille.jpg';
	      	CurrentUser.sessionsAttended = [];
	      	CurrentUser.upcomingSessions = [];
			$window.CurrentUser =  CurrentUser;
		}

		$scope.trainings = trainingFactory.getAll();
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'$scope',
				'$window',
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();