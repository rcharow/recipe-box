var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var chalk = require('chalk');
var bodyParser = require('body-parser');
var fs = require('fs');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// var authFB = require('./api/auth/facebook');

app.use(session({
  secret: 'supersecret',
  saveUninitialized: false,
  resave: false,
  cookie: {
    secure: false
  }
}));

var clientPath = path.join(__dirname, '../client');
var buildPath = path.join(__dirname, '../client/build');    // for gulped files
var indexHtmlPath = path.join(__dirname, './index.html');
var nodePath = path.join(__dirname, '../node_modules');
var imagePath = path.join(__dirname, './images');

app.use(passport.initialize());
app.use(passport.session());

/* 
Meaniscule doesn't use Bower by default. To use Bower,
uncomment the following line and the related `app.use` line below.
*/
// var bowerPath = path.join(__dirname, '../bower_components');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(clientPath));
app.use(express.static(buildPath));
app.use(express.static(nodePath));
app.use(express.static(imagePath));
// app.use(express.static(bowerPath));



/* 
Provides a 404 for times 
Credit to `fsg` module for this one!
*/
app.use(function (req, res, next) {

  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next(null);
  }

});

// Routes
//// APIs for AJAX

// Look up all route files/folders from directory
var directories = fs.readdirSync(path.join(__dirname, '/api/'));

// Require each route dynamically 
directories.forEach(function(dir) {
  // Prepend /api/ to all api routes
  console.log("ROUTE: ",'/api/'+dir+'/');
  app.use('/api/' + dir + '/', require('./api/' + dir));
});


//// Index/Home
app.use('/', function(req, res, next) {
  // console.log("REQ USER",req.user)
  res.sendFile(path.join(__dirname, './index.html'));
});


// Errors
//// Not found
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//// Server issues
app.use(function(err, req, res, next) {
  console.log('SERVER ERROR:', err);
  err.status = err.status || 500;
  res.status(err.status).send(err);
  // res.sendStatus(err.status || 500);

});


module.exports = app;

