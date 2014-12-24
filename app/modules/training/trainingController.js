/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($window, $document, CurrentUser, trainingFactory) {
		var self = this;
		$document.scrollTop(0, 0);

		trainingFactory.getAll().then(function(trainings){
        	// set the trainings
        	self.trainings = trainings;
      	});
	}


	function trainingDirective(){
		return {
			templateUrl: 'views/trainingDirective.tpl.html',
			replace: true,
			scope:{
				vm: '=model'
			}
		}
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'$window',
				'$document',
				'CurrentUser',
				'trainingFactory',
				TrainingController
			])
		.directive("training", trainingDirective);

})();