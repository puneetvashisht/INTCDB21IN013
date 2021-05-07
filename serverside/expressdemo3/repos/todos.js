// 1. Import the library
const mongoose = require('mongoose');


// 2. Create a schema
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  text: {
    type: String,
    required: [true, 'Provide a text value.. It is mandatory']
  },
  done: Boolean
});

// 3. Model from Schema (object from schema)
const Todo = mongoose.model('Todo', TodoSchema);

// 4.Connection to db
console.log('attempting to connect')

// 4. Create connection
  mongoose.connect('mongodb://localhost:27017/ctsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });


// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'ctsdb';
// const client = new MongoClient(url);


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
    console.log('connected to db')

    return new Promise((resolve, reject)=>{

      //5.  Create model object
      const todoInstance = new Todo();
      todoInstance.text = todo.text;
      todoInstance.done = todo.done;

      //6. Insert to db
      todoInstance.save(function (err) {  //
        if(err) throw err;
        console.log('saved into db')
        resolve({success: true, message: "Record successfully inserted"});
      })

        // client.connect(function(err) {
        //     console.log('Connected successfully to server');
        //     const db = client.db(dbName);
          
        //     const collection = db.collection('todos');
        //     collection.insertOne(todo, (error, result)=>{
        //         if(error) console.log(error)
        //         // if(error) reject({success: false, message: 'Record failed to insert'});
        //         console.log(result)
        //         // client.close();
        //         resolve({success: true, message: "Record successfully inserted"});
        //     })
        //   });
    })   
}

// fetch all todos
function fetchAllTodos(fn){

    Todo.find({}, function (err, docs) {
      console.log(docs)
      fn(docs)
    })
    // client.connect(function(err) {
    //     console.log('Connected successfully to server');
    //     const db = client.db(dbName);
    //     const collection = db.collection('todos');
    //   collection.find({}).toArray(function(err, docs) {
    //       // assert.equal(err, null);
    //       console.log('Found the following records');
    //       console.log(docs);
    //       // callback(docs);
    //     //   client.close();
    //       fn(docs)
         
    //     });
      
    //   });
}

module.exports = {insertTodo, fetchAllTodos}