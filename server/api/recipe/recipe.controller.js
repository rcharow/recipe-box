var mongoose = require('mongoose');
var Unit = require('../../db/models/unit');
var Recipe = require('../../db/models/recipe');
var validate = require('./recipe.validate.js');
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
        res.send(units);
      });
 },
 createRecipe: function(req, res, next) {
    req.body.userId = req.user._id;

    var errors = validate.validateRecipe(req.body);
    if(errors.length){
      console.log("sending multiple errors");
      res.send(errors);
    }else{
      Recipe
      .create(req.body, function(err, recipe){
        // if(err) return next(err);
        console.log("CREATING RECIPE");
        
        if(err){
          console.log("sending generic error");
         res.send({
          errors: ["There was an error saving the recipe."]
         }) 
        }else{
          console.log("sending success");
          res.send(recipe);
        }
      });
    }
  } 
}

