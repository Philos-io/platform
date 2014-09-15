/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($scope, $routeParams, trainingFactory, $location, $document) {

		$scope.session = trainingFactory.getTrainingById($routeParams.training_id)[0];

		$document.scrollTop(0, 0);

		$scope.session.numberAttendees = $scope.session.attendees.length;

		/*
		* Register for a training
		*/
		$scope.register = function (){
			$location.path('/cart');
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
				TrainingDetailsController
			]);

})();