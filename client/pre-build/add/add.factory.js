app.factory('AddFactory',function($http){
	var create = function(recipe){
		$http.post('/api/recipe',recipe)
		.then(function(res){
			console.log("CREATE RESPONSE",res.data);
			return res.data;
		});
	};

	return {
		create: create
	};
});