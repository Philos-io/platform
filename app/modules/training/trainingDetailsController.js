/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($scope, $document, $routeParams, trainingFactory) {
		
		var session = trainingFactory.getTrainingById($routeParams.url);
		if (session) {
			$scope.session = session[0];
		}else{
			trainingFactory.getAll().then(function(trainings){
        		trainings.forEach(function(session) {
					if(session.url === $routeParams.url){
						$scope.session = session;		
						$scope.session.numberAttendees = $scope.session.attendees.length;
						return
					}
				});
      		});
		}

		$document.scrollTop(0, 0);

		
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