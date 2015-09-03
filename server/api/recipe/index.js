var router = require('express').Router();
module.exports = router;
var controller = require('./recipe.controller.js');

router.get('/units', controller.getUnits);

router.post('/',controller.createRecipe);