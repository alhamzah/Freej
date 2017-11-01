var express = require('express');
var router = express.Router();

var basicController = require('./../controllers/basicController')
var postController = require('./../controllers/postController')

router.get('/new', function(req, res){
  res.render('newPost', {title: "New Post"});
});

router.get('/thankyou', function(req, res){
  res.render('signup_thankyou', { title: 'New Post' });
});

module.exports = router;


router.post('/', function(req, res){
  postController.post(req, res);
});

module.exports = router;
