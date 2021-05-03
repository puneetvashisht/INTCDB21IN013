// any db operation for user entity

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ctsdb';
const client = new MongoClient(url);

function insertUser(user){
    
    return new Promise((resolve, reject)=>{
        client.connect(function(err) {
            console.log('Connected successfully to server');
            const db = client.db(dbName);
          
            const collection = db.collection('users');
            collection.insertOne(user, (error, result)=>{
                if(error) console.log(error)
                // if(error) reject({success: false, message: 'Record failed to insert'});
                console.log(result)
                // client.close();
                resolve({success: true, message: "Record successfully inserted"});
            })
          });
    })   
}

function findAllUsers(fn){
    client.connect(function(err) {
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('users');
      collection.find({}).toArray(function(err, docs) {
          // assert.equal(err, null);
          console.log('Found the following records');
          console.log(docs);
          // callback(docs);
        //   client.close();
          fn(docs)
         
        });
      
      });
}


function deleleUser(name){
    return new Promise((resolve, reject)=>{
    client.connect(function(err) {
        console.log('Connected successfully to server');
        const db = client.db(dbName);
      
        const collection = db.collection('users');
   
        collection.deleteOne({name}, (error, result)=>{
            if(error) console.log(error)
            // if(error) reject({success: false, message: 'Record failed to insert'});
            console.log(result)
            // client.close();
            resolve({success: true, message: "Record successfully deleted"});
        })
      });
    });
}

// module.exports = {insertUser:insertUser, findAllUsers:findAllUsers}
module.exports = {insertUser, findAllUsers, deleleUser}