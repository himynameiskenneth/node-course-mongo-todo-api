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

    //deleteMany
    // db.collection('Todos').deleteMany({"text": "Eat lunch"}).then(function(result){
    //     console.log(result);
    // }).catch(function(err){
    //     console.log(error);
    // })

    //deleteOne

    // db.collection('Todos').deleteOne({"text": "Eat Lunch"}).then(function(result){
    //     console.log(result);
    // }).catch(function(err){
    //     console.log(error);
    // })

    //findOneAndDelete: Returns the information of the thing that was deleted.

    db.collection('Todos').findOneAndDelete({"completed":false}).then(function(result){
        console.log(result);
    }).catch(function(err){
        console.log(err);
    })


    db.close();
});