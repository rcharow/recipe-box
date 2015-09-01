app.factory('AuthFactory',function($http,$rootScope,$state){
	function emitCurrentUser(user){
		$rootScope.$emit('currentUser',user);
	}

	var authenticatedUser = function(){
		return $http.get('/api/auth/user')
		.then(function(res){
			emitCurrentUser(res.data);
			return res.data;
		});
	};

	var logout = function(){
		$http.get('/api/auth/logout')
		.then(function(res){
			emitCurrentUser();
			$state.go('login');
		})
	}

	return {
		authenticatedUser: authenticatedUser,
		logout: logout
	}
})