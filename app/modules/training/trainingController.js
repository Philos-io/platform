/*
* Training controller
*/

(function(){
'use strict';
	
	function TrainingController(CurrentUser, trainingFactory) {
		this.all = trainingFactory.getAll();
	}

	angular
		.module('training')
		.controller('TrainingController', [
				'CurrentUser',
				'trainingFactory',
				TrainingController
			]);

})();