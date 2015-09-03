app.directive('ingredientInput',function(){
	return {
		restrict: 'E',
		templateUrl: '/pre-build/ingredient-input/ingredient-input.html',
		scope: {
			units: '=',
			remove: '&'
		}
	}
});