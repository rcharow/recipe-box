var router = require('express').Router();
var passport = require('passport');

router.get('/user',function (req,res){
	console.log("USER IN GET USER", req.user);
	if(req.user)
		res.send(req.user._id);
	else
		res.send("");
});

router.get('/logout',function (req, res){
	req.logout();
	console.log("REQ USER IN LOGOUT",req.user);
	res.redirect('/');
})

module.exports = router;