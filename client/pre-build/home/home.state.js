app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/pre-build/home/home.html',
        controller: 'HomeController',
        resolve: {
        	currentUser: function(AuthFactory){
        		return AuthFactory.authenticatedUser()
        		.then(function(result){
        			console.log("RESULT IN RESOLVE",result);
        			return result;
        		});
        	}
        }
    });
});