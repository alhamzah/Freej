var express = require('express');
var router = express.Router();

var basicController = require('./../controllers/basicController')
var userController = require('./../controllers/userController')

router.get('/', function(req, res){
  res.render('newUser', {title:'Sign up form'});
});

router.get('/thankyou', function(req, res){
  res.render('signup_thankyou', { title: 'Signing up' });
});

router.post('/', function(req, res){
  userController.post(req, res);
});

module.exports = router;
