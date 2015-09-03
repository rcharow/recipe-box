app.config(function($stateProvider) {
    $stateProvider.state('add', {
        url: '/add',
        templateUrl: '/pre-build/add/add.html',
        controller: 'AddRecipeController',
        resolve: {
        	currentUser: function(AuthFactory,$state){
        		return AuthFactory.authenticatedUser()
        		.then(function(user){
                          if(!user)
                            $state.go('login');
        			else
                            return user;
        		});
        	},
            units: function(RecipeFactory){
                return RecipeFactory.getUnits();

                // .then(function(units){
                //     console.log("UNITS IN RESOLVE",units);
                //     return units;
                // }
            }
        }
    });
});