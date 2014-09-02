/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController($window, CurrentUser, trainingFactory) {
		this.all = trainingFactory.getAll();
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'$window',
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();