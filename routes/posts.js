var express = require('express');
var router = express.Router();

var basicController = require('./../controllers/basicController')
var postController = require('./../controllers/postController')

router.get('/', function(req, res){
  postController.getAll(req, res);
});

module.exports = router;
