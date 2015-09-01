'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');
var UserModel = require('../../db/models/user.js').User;

module.exports = router;

var config = require('../../config');

var googleCredentials = {
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
};

var verifyCallback = function (accessToken, refreshToken, profile, done) {
	console.log("IN GOOGLE VERIFY");
    User.findOne({facebook: {id: profile.id}}).exec(function (err, user) {
			if (err) done(err);
			else if (user) done(null, user);
			else {
				User.create({
					facebook: {
						id: profile.id,
						token: accessToken,
						name: profile.name.givenName + ' ' + profile.name.familyName,
						email: profile.emails[0].value
					}
				}, done);
			}
		});

};

passport.serializeUser(function (user, done) {
	done(null, user._id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id).exec(done);
});

passport.use(new GoogleStrategy(googleCredentials, verifyCallback));

router.get('/', passport.authenticate('google', {
    scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
    ]
}));

router.get('/callback?code',
    passport.authenticate('google', { failureRedirect: '/' }),
    function (req, res) {
        res.redirect('/login');
    });


