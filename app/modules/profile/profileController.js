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
			postalcode: '3080',
			city: 'Tervuren',
			companyOrSchool: 'Philos.io',
			jobTitle: 'Software Engineer',
			linkedIn: '',
			twitter: '',
			github: ''
		};

		$scope.isEditMode = false;

		$scope.enableSocialMedia = function(){
			var user = $scope.user;
			return !(user.github && user.linkedIn && user.twitter);
		}

		$scope.edit = function(){
			$scope.isEditMode = !$scope.isEditMode;	
		};

		$scope.update = function(){
			$scope.isEditMode = false;
			$document.scrollTop(0, 0);
		}
	}	

	angular.module('profile')
		.controller('ProfileController', ['$scope', '$document', ProfileController])
		.directive('changemode', function(){
			return {
				restrict:'A',
				link: function(scope, el, attrs, ctrl){
					el.click(function(evt){
						var text = el.text();
						if (text === 'Edit') { 
							el.text('Cancel'); 
						}else{
							el.text('Edit');
						}
					});
				}
			}
		});

})();