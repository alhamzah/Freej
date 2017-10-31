var db = require('./../models');

 var postController = {};

postController.post = function(req, res) {
  var {
    title,
    text,
    link,
    userId, //need tokenize
  } = req.body;

  var post = new db.Post({
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

postController.getAll = function(req,res) {
  db.Post.find({}).populate({
    path: '_creator',
    select: 'username -_id'
    }).then(function(posts){
    return res.status(200).json({
      success: true,
      data: posts,
    });
  }).catch(function(err){
    res.status(500).json({
      success: false,
      message: err,
    });
  });
}

module.exports = postController;