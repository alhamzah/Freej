var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  text: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  _creator: {
    type: Schema.ObjectId,
    ref: 'User',
  }
});

//write encryption for password

var Post = mongoose.model('Post', postSchema);

module.exports = Post;

