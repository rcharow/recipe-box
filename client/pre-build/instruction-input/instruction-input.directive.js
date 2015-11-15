app.directive('instructionInput',function(){
	return {
		restrict: 'E',
		templateUrl: '/pre-build/instruction-input/instruction-input.html',
		scope: {
			remove: '&',
			model: '='
		}
	}
});