// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');   //Same as line 1

// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

var URL = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(URL, function(err, db){
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    // Insert new doc into Todos collection
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, function(err, result){
    //     if(err) {
    //         return console.log('Unable to insert todo ', err)
    //     } 
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    
    // Insert new doc into Users collection
    db.collection('Users').insertOne({
        name: "Kenneth",
        age: "24",
        location: "Singapore"
    }, function(err, result) {
        if(err){
            return console.log('Unable to insert user', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });



    db.close();
});