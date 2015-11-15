var mongoose = require('mongoose');
var db = mongoose.connection;

var RecipeSchema = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, required: true},
	name: {type: String, required: true},
	description: {type: String},
	category: {type: String},
	ingredients: [{ 
		ingredient: {type: String, required: true}, 
		quantity: {type: Number, required: true}, 
		unit: {type: String, required: true} 
	}],
	instructions: [{type: String}],
	notes: {type:String},
	photoUrl: {type: String},
	tags: [{type: String}]
});

var Recipe = mongoose.model('Recipe',RecipeSchema);

module.exports = Recipe;

