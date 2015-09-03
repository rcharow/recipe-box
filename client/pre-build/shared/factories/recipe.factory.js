app.factory('RecipeFactory',function($http){
	var getUnits = function(){
		return $http.get('/api/recipe/units')
		.then(function(res){
			console.log("UNITS IN FACTORY:",res.data);
			return res.data;
		});
	}

	return {
		getUnits: getUnits
	};
});