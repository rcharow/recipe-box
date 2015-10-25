var router = require('express').Router();
var passport = require('passport');

router.get('/user',function (req,res){
	if(req.user)
		res.send(req.user._id);
	else
		res.send("");
});

router.get('/logout',function (req, res){
	req.logout();
	res.redirect('/');
})

module.exports = router;