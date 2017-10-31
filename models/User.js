var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, "username must be at least 5 chars"],
  },
  password: {
    type: String,
    required: true,
    minlegnth: [5, "password must be at least 5 chars"],
  }
});

//write encryption for password

var User = mongoose.model('User', userSchema);

module.exports = User;

