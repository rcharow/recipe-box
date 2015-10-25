app.directive("navbar", function($rootScope, AuthFactory){
	return {
		restrict: "E",
		templateUrl: "/pre-build/navbar/navbar.html",
		link: function(scope, el, att){
			scope.currentUser;

			scope.logout = function(){
				debugger;
				AuthFactory.logout();
			};

			$rootScope.$on('currentUser',function(event,user){
				if(user)
					scope.currentUser = user;
				else
					scope.currentUser = null;
			})
		}
	};
});