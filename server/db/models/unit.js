var mongoose = require('mongoose');
var db = mongoose.connection;

// mongoose.connect('mongodb://localhost/recipe-box');
// db.on('error',console.error.bind(console, 'MongoDb connection error'));

var UnitSchema = new mongoose.Schema({
	unit: {type: String, required: true},
	plural: {type: String, require: true},
	system: {type: String, required: true}
});

var Unit = mongoose.model('Unit',UnitSchema);

module.exports = Unit;


