var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var MONGODB_URI = 'mongodb://heroku_2tjx2h69:qr9de4q7ns1ceofge42799s111@ds245615.mlab.com:45615/heroku_2tjx2h69'

var db

MongoClient.connect(MONGODB_URI, function(err, databsae){
  assert.equal(null, err);
  console.log("Connected to the server ...");
  db = databsae;
});

var index = require('./routes/index');
var post = require('./routes/post');
var signup = require('./routes/signup');
var posts = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var comps = ["UCL", "BPL", "SerieA", "Bundesliga", "LaLiga", "Ligue1"];

app.get('/', function(req, res){
  console.log('login')
  var ctr = 0;
  var games = new Object();

  comps.forEach(function(comp){
    db.collection(comp).find({"clips":{ $exists: true, $ne: [] }}).toArray(function(err, arr){
    games[comp] = arr;
    console.log(games)
    console.log(Object.keys(games).length)
    if (Object.keys(games).length == comps.length) {
      res.render('index', { title: 'Freej', games: games});
    };
  });

  });
});

// app.use('/post', post);
// app.use('/signup', signup);
// app.use('/posts', posts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
