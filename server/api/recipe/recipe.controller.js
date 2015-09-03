var mongoose = require('mongoose');
var Unit = require('../../db/models/unit');
var Recipe = require('../../db/models/recipe');
var db = mongoose.connection;
mongoose.connect('mongodb://localhost/recipe-box');
db.on('error',console.error.bind(console, 'MongoDb connection error'));

module.exports = {
  getUnits: function (req, res) {
    console.log("about to get units");
    Unit
      .find()
      .exec()
      .then(function(units) {
        console.log("UNITS", units);
        res.send(units);
      });
 },
 createRecipe: function(req, res, next) {
    Recipe
      .create(req.body, function(err, recipe){
        if(err) return next(err);
        res.send(recipe);
      });
  } 
}

