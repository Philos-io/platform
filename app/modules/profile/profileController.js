(function(){
	'use strict';


	function ProfileController($scope, $document){

		$document.scrollTop(0, 0);

		//User objedt
		$scope.user = {
			firstname: 'Davy',
			lastname: 'Engone',
			email: 'davy@philos.io',
			password: 'getbetter2',
			mobile: '+32488790802',
			address1: 'Dorpsplein 7/2',
			address2: '',
			postalcode: '3080',
			city: 'Tervuren'
		};

		$scope.isEditMode = false;

		$scope.edit = function(){
			$scope.isEditMode = !$scope.isEditMode;	
		};

		$scope.update = function(){
			$scope.isEditMode = false;
			$document.scrollTop(0, 0);
		}
	}	

	angular.module('profile')
		.controller('ProfileController', ['$scope', '$document', ProfileController]);
})();