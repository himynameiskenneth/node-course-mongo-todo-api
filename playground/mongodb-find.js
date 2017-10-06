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

    // To search for a particular record using ObjectID
    // db.collection('Todos').find({
    //     _id: new ObjectID("59d707dc26f84a34d73d61ae")
    //     }).toArray().then(function(results){
    //     console.log(JSON.stringify(results, undefined, 2));
    // }).catch(function(err){
    //     console.log("Unable to fetch todos", err)
    // })
    
    // To count the no. of records
    // db.collection('Todos').find().count().then(function(count){
    //     console.log('Todos count: ' + count);
    // }).catch(function(err){
    //     console.log("Unable to fetch todos", err)
    // })

    // Finding a particular user from the User collection
    db.collection("Users").find({"name": "Andrew"}).toArray().then(function(results){
        console.log(JSON.stringify(results, undefined, 2));
    }).catch(function(err){
        console.log(err);
    });

    db.close();

    
});