app.factory('RecipeFactory',function($http){
	var getUnits = function(){
		return $http.get('/api/recipe/units')
		.then(function(res){
			return res.data;
		});
	}

	return {
		getUnits: getUnits
	};
});