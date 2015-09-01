app.controller('LoginController',function($scope){
	$scope.login = function(type){
		if(type==='facebook')
			window.location.href = 'api/facebook';
		if(type==='google')
			window.location.href = 'api/google';
	}

	// $scope.logout = function(){
	// 	window.location.href = '/auth/logout'
	// }
})