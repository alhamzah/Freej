var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('signup_thankyou', { title: 'Signup' });
});

module.exports = router;
