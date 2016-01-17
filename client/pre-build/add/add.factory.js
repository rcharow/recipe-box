app.factory('AddFactory',function($http){
	var create = function(recipe){
		console.log("in add factory");
		$http.post('/api/recipe',recipe)
		.then(function(res){
			debugger;
			console.log("CREATE RESPONSE",res.data);
			return res.data;
		});
	};

	return {
		create: create
	};
});