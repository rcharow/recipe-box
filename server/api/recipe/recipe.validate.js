module.exports = {
	validateRecipe: function(recipe){
		var errors = [];
		if(typeof recipe.name === 'undefined' || recipe.name === 'null'){
			errors.push('Missing recipe name.')
		};
		if(recipe.ingredients.length){
			var ing;
			var name = false;
			var quanity = false;
			var unit = false; 

			for (var i = 0; i < recipe.ingredients.length; i++) {
				ing = recipe.ingredients[i];
				if(ing.ingredient === null && !name){
					errors.push('Missing ingredient name.');
					name = true;
				}
				if(ing.quantity === null && !quantity){
					errors.push('Missing ingredient quantity.');
					quantity = true;
				}
				if(ing.unit === null && !unit){
					errors.push('Missing ingredient unit.');
					unit = true;
				};
				if(name&&quantity&&unit){
					break;
				}
			};
		} 

		return errors;
	}
}