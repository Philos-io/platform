'use strict';

/*
* Register controller
*/

function registerController($scope) {
	$scope.pageClass = 'page-register';
}	

angular.module('philosAngularApp').controller('RegisterController', registerController);
