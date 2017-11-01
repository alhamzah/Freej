var express = require('express');
var router = express.Router();

var db = require('./../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Post.find({}).populate({
    path: '_creator',
    select: 'username -_id'
    }).then(function(posts){
  res.render('index', { title: 'Freej', posts: posts});
  });
});

module.exports = router;
