var express = require('express');
var router = express.Router();
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../db/models/user.js').User;


var config = require('../../config');

passport.use(
	new FacebookStrategy({
		clientID: config.facebook.clientID,
		clientSecret: config.facebook.clientSecret,
		callbackURL: config.facebook.callbackURL
	},
	function (accessToken, refreshToken, profile, done) {
		// register this person as a user
		// find or create facebook user by profile id
		console.log('in verify function');
		console.log("PROFILE: ",profile);
		User.findOne({facebook: {id: profile.id}}).exec(function (err, user) {
			if (err) done(err);
			else if (user) done(null, user);
			else {
				User.create({
					facebook: {
						id: profile.id,
						token: accessToken,
						name: profile.displayName,//profile.name.givenName + ' ' + profile.name.familyName,
						email: profile.email
					}
				}, done);
			}
		});
	})
);

passport.serializeUser(function (user, done) {
	done(null, user._id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id).exec(done);
});

router.get('/', passport.authenticate('facebook', {
	scope: 'email'
}));

router.get('/callback', passport.authenticate('facebook', {
	failureRedirect: '/login',
	successRedirect: '/',
	failureFlash: true,
	successFlash: true
}));

router.use(function (err,req,res,next){
	res.status(500).send(err.errors)
})

module.exports = router;