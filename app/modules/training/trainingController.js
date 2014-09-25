/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($scope, $window, $document, CurrentUser, trainingFactory) {
		
		

		$document.scrollTop(0, 0, function(){
			alert('data');	
		});

      	trainingFactory.getAll().then(function(trainings){
        
        	// set the trainings
        	$scope.trainings = trainings;

        	// Save that in the localstorage
        	$window.localStorage.trainings = JSON.stringify(trainings);
      	});
	      	
		// if ($window.localStorage && !$window.localStorage.trainings) {
	 //    }else{
	 //    	// No need to make a round trip to the database, just get the trainings from the localstorage
	 //      	$scope.trainings = JSON.parse($window.localStorage.trainings);
	 //    }
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