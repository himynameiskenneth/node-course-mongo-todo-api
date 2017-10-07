const mongoose = require('mongoose');

var URL = "mongodb://localhost:27017/TodoApp";
//Set up mongoose to use promises
mongoose.Promise = global.Promise;

mongoose.connect(URL)


module.exports = {
    mongoose: mongoose
};