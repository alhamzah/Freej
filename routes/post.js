var express = require('express');
var router = express.Router();

var basicController = require('./../controllers/basicController')
var postController = require('./../controllers/postController')

router.post('/', function(req, res){
  postController.post(req, res);
});

module.exports = router;
