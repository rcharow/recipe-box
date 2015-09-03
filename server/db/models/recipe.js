var mongoose = require('mongoose');
var db = mongoose.connection;

// mongoose.connect('mongodb://localhost/recipe-box');
// db.on('error',console.error.bind(console, 'MongoDb connection error'));

var RecipeSchema = new mongoose.Schema({
	userId: {type: mongoose.Schema.Types.ObjectId, required: true},
	name: {type: String, required: true},
	description: {type: String},
	ingredients: [{ ingredient: String, quantity: Number, unit: String }],
	instructions: [{type: String}],
	notes: [{type:String}],
	photoUrl: {type: String},
	category: {type: String},
	tags: [{type: String}]
});

var Recipe = mongoose.model('Recipe',RecipeSchema);

module.exports = Recipe;

