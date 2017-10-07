var mongoose = require('mongoose');

// Defining the model (2 Argument)
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        // Make default: false because no one will create a to-do list if the task has already been completed
        default: false
    },
    completedAt: {
        type: Number,
        // Set the default to null because we don't wnat it to exist until the Completed(Boolean) turns to true
        default: null   
    }
});

// Creating a new instance of the model (1 Argument)
// var newToDo = new Todo({
//     text: 'test'
// })

// Saves the instance into the mongoDB database. Save() returns a promise
// newToDo.save()
// .then(function(result){
//     console.log("Saved todo", result);
// })
// .catch(function(error){
//     console.log(error);
// });

// Adding another task
var otherToDo = new Todo({
    text: "Feed the cat",
    completed: true,
    completedAt: 221,
});

otherToDo.save()
.then(function(result){
    console.log(JSON.stringify(result, undefined, 2))
})
.catch(function(error){
    console.log(error);
})


// Export the model

module.exports = {
    Todo: Todo
}