const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js')

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

//By doing this, you can now send JSOn to your application's server. app.use is to utilize middleware functions
app.use(bodyParser.json());

app.post("/todos", function(req, res){
    var todo = new Todo({
        text: req.body.text
    });
    todo.save()
    .then(function(doc){
        // This is to send the doc back to the user on the front-end. (Visual feedback)
        res.send(doc);
    })
    .catch(function(err){
        res.status(400).send(err);
    })
});

app.listen(3000, function(){
    console.log("Port started on port 3000")
});



