var db = require('./../models');

 var userController = {};

userController.post = function(req, res) {
  var {username, password} = req.body;

  var user = new db.User({
    username,
    password
  });

  console.log(JSON.stringify(user));

  user.save().then(function(newUser){
    res.status(200).json({
      success: true,
      data: newUser,
    })
  }).catch(function(err){
    res.status(500).json({
      success: false,
      message: err,
    });
  });
}

module.exports = userController;