app.controller('AddRecipeController',function($scope){
	$scope.recipeName;
	$scope.category;
	$scope.ingredients = [{
		ingredient: null,
		quantity: null,
		units: null
	}];

	$scope.instructions = [""];
	$scope.photoUrl;
	$scope.tags = [""];
});