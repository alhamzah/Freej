var db = require('./../models/post.js');

 var postController = {};

postController.post = function(req, res) {
  var {
    title,
    text,
    link,
    userId, //need tokenize
  } = req.body;

  console.log(req.body, 'postController req')

  var post = new db({
    title,
    text,
    link,
    _creator: userId,
  });

  console.log(JSON.stringify(post));

  post.save().then(function(newPost){
    res.status(200).json({
      success: true,
      data: newPost,
    })
  }).catch(function(err){
    res.status(500).json({
      success: false,
      message: err,
    });
  });
}

module.exports = postController;