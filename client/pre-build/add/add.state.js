app.config(function($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        templateUrl: '/pre-build/add/add.html',
        controller: 'AddRecipeController',
        resolve: {
        	currentUser: function(AuthFactory,$state){
        		return AuthFactory.authenticatedUser()
        		.then(function(result){
                          console.log("RESULT IN ADD RESOLVE", result);
                          if(!result)
                            $state.go('login');
        			else
                            return result;
        		});
        	}
        }
    });
});