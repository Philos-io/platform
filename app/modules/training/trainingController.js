/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($scope, $window, CurrentUser, trainingFactory) {
		$scope.trainings = JSON.parse($window.localStorage.trainings);;
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