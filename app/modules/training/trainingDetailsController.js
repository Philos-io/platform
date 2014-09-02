/*
* Training's details controller
*/

(function(){
'use strict';
	
	function TrainingDetailsController($routeParams, CurrentUser, trainingFactory) {
		console.log($routeParams);
		this.all = this.all || trainingFactory.getAll();
	}

	angular
		.module('training')
		.controller('TrainingDetailsController', [
				'$routeParams',
				'CurrentUser',
				'trainingFactory',
				TrainingDetailsController
			]);

})();