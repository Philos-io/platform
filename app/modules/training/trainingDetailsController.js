/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($scope, $document, $routeParams, trainingFactory) {
		
		$scope.session = trainingFactory.getTrainingById($routeParams.url)[0];

		$document.scrollTop(0, 0);

		$scope.session.numberAttendees = $scope.session.attendees.length;
	}

	angular
		.module('training')
		.controller('TrainingDetailsController', [
				'$scope',
				'$document',
				'$routeParams',
				'trainingFactory',
				TrainingDetailsController
			]);
})();