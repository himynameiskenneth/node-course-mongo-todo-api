// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');   //Same as line 1

// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

var URL = "mongodb://localhost:27017/TodoApp";

MongoClient.connect(URL, function (err, db) {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log('Connected to MongoDB server');

    //findOneAndUpdate(Filter: The condition to search, Update: The change you want to make, Option: Can choose from the list of available options, Callback: Can leave this out and use promise instead)

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID("59d743e9a917a37386b3c2fc"),
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(function(result){
    //     console.log(result)
    // })


    //findOneAndUpdate w/ Number increment
    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID('59d72d39755c7b37f1a9d283')
    }, {
            $set: {
                name: 'Cristiano'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then(function (result) {
            console.log(result)
        })

    db.close();
});