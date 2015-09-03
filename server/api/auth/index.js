var router = require('express').Router();
var passport = require('passport');

router.get('/user',function (req,res){
	console.log("USER IN GET USER", req.user._id);
	if(req.user)
		res.send(req.user._id);
	else
		res.send("");
});

router.get('/logout',function (req, res){
	req.logout();
	console.log("REQ USER IN LOGOUT",req.user._id);
	res.redirect('/');
})

module.exports = router;