var express = require('express');
var router = express.Router();
var passport = require('passport')

router.get('/current_user',function (req,res){
	
	if(req.user)
		res.send(req.user);
	res.send("");
})

router.get('/logout',function (req, res){
	passport.logout();
	res.redirect('/');
})

module.exports = router;