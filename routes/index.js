var express = require('express');
var router = express.Router();
// var db = require('./../models');

var db = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(db.collections)
  db.Post.find({}).populate({
    path: '_creator',
    select: 'username -_id'
    }).then(function(posts){
  res.render('index', { title: 'Freej', posts: posts});
  });
});

module.exports = router;
