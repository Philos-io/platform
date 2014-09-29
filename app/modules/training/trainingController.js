/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($scope, $window, $document, CurrentUser, trainingFactory) {
		
		$document.scrollTop(0, 0);

		trainingFactory.getAll().then(function(trainings){
        	// set the trainings
        	$scope.trainings = trainings;
      	});
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'$scope',
				'$window',
				'$document',
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();