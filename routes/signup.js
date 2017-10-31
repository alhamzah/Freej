var express = require('express');
var router = express.Router();

var basicController = require('./../controllers/basicController')
var userController = require('./../controllers/userController')

router.post('/', function(req, res){
  userController.post(req, res);
});

module.exports = router;
