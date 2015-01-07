/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($document, $routeParams, trainingFactory) {
		
		var vm = this;
		var session = trainingFactory.getTrainingById($routeParams.url);
		if (session) {
			vm.session = session[0];
			vm.session.numberAttendees = vm.session.attendees.length;
		}else{
			trainingFactory.getAll().then(function(trainings){
        		trainings.forEach(function(session) {
					if(session.url === $routeParams.url){
						vm.session = session;		
						vm.session.numberAttendees = $scope.session.attendees.length;
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
				'$document',
				'$routeParams',
				'trainingFactory',
				TrainingDetailsController
			]);
})();