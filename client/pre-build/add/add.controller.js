app.controller('AddRecipeController',function($scope,units){
	$scope.units = units
	.sort(function(a,b){
        if(a.unit > b.unit) return 1;
        if(a.unit < b.unit) return -1;
        return 0;
    });

	$scope.recipeName;
	$scope.category;
	$scope.ingredients = [{
		ingredient: null,
		quantity: null,
		units: null
	}];

	$scope.instructions = [{
		instruction: null
	}];

	$scope.photoUrl;
	$scope.tags = [""];

	$scope.addIngredient = function(){
		$scope.ingredients.push({
			ingredient: null,
			quantity: null,
			units: null
		})
	};

	$scope.addInstruction = function(){
		$scope.instructions.push({
			instruction: null
		})
	}

	$scope.removeIngredient = function(idx){
		$scope.ingredients.splice(idx,1);
	};

	$scope.removeInstruction = function(idx){
		$scope.instruction.splice(idx,1);
	}
});