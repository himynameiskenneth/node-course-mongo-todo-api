var mongoose = require('mongoose');

// Users
var User = mongoose.model('User', {
    email: {
        type: String,
        minlength: 1,
        required: true,
        trim: true
    }
});

var user = new User({
   email: "kennethphooi@gmail.com"
});

user.save()
.then(function(doc){
    console.log(doc)
}).catch(function(err){
    console.log(err)
})

module.exports = {
    User: User
};