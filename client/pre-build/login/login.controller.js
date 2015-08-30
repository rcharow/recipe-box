app.controller('LoginController',function($scope){
	$scope.login = function(){
		window.location.href = 'api/facebook';
	}

	// $scope.logout = function(){
	// 	window.location.href = '/auth/logout'
	// }
})