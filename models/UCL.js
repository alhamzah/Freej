var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var UCL = mongoose.db;

module.exports = UCL;