var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/myown");


module.exports.Todo = require('./todo');