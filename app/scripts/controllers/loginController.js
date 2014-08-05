'use strict';

/*
* Login controller
*/

function loginController($scope) {
	$scope.pageClass = 'page-login';
}	

angular.module('philosAngularApp').controller('LoginController', loginController);
