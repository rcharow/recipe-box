app.controller('AddRecipeController',function($scope,units,AddFactory){
	$scope.units = units
	.sort(function(a,b){
        if(a.unit > b.unit) return 1;
        if(a.unit < b.unit) return -1;
        return 0;
    });

	$scope.recipeName;
	$scope.category;
	$scope.description;
	$scope.ingredients = [{
		ingredient: null,
		quantity: null,
		unit: null
	}];

	$scope.instructions = [{
		instruction: null
	}];

	$scope.notes;

	$scope.photoUrl;
	$scope.tags = [];

	$scope.addIngredient = function(){
		console.log("Adding ingredient to: ", $scope.ingredients);
		$scope.ingredients.push({
			ingredient: null,
			quantity: null,
			unit: null
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
		$scope.instructions.splice(idx,1);
	}

	$scope.submit = function(){
		var recipe = {};
		recipe.name = $scope.recipeName;
		recipe.description = $scope.description;
		recipe.category = $scope.category;
		recipe.ingredients = [];
		for(var i in $scope.ingredients){
			if($scope.ingredients[i]){
				recipe.ingredients.push($scope.ingredients[i]);
			}
		};
		recipe.instructions = [];
		for(var i in $scope.instructions){
			if($scope.instructions[i]){
				recipe.instructions.push($scope.instructions[i].instruction);
			}
		};

		recipe.photoUrl = $scope.photoUrl;
		recipe.notes = $scope.notes;

		recipe.tags = [];
		for(var i in $scope.tags){
			if($scope.tags[i].text){
				recipe.tags.push($scope.tags[i].text);
			}
		};
		console.log	("RECIPE: ", recipe);
		var create = AddFactory.create(recipe);
		console.log("CREATE", create);

	}
});