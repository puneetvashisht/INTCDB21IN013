const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ctsdb';
const client = new MongoClient(url);


// Insert into DB
// using callbacks
// function insertTodo(todo, callback){
//     client.connect(function(err) {
//         console.log('Connected successfully to server');
//         const db = client.db(dbName);
      
//         const collection = db.collection('todos');
//         collection.insertOne(req.body, (error, result)=>{
//             if(error) throw error;
//             console.log(result)
//             client.close();
//             callback();
//         })
//       });
// }

// Promises
function insertTodo(todo){
    return new Promise((resolve, reject)=>{
        client.connect(function(err) {
            console.log('Connected successfully to server');
            const db = client.db(dbName);
          
            const collection = db.collection('todos');
            collection.insertOne(todo, (error, result)=>{
                if(error) console.log(error)
                // if(error) reject({success: false, message: 'Record failed to insert'});
                console.log(result)
                client.close();
                resolve({success: true, message: "Record successfully inserted"});
            })
          });
    })   
}

// fetch all todos
function fetchAllTodos(fn){
    client.connect(function(err) {
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('todos');
      collection.find({}).toArray(function(err, docs) {
          // assert.equal(err, null);
          console.log('Found the following records');
          console.log(docs);
          // callback(docs);
          client.close();
          fn(docs)
         
        });
      
      });
}

module.exports = {insertTodo, fetchAllTodos}