const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'ctsdb';
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function(err) {
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  const collection = db.collection('employee');
//   collection.insert({id:11, name: "NodeJS", salary:34333}, (error, result)=>{
//       if(error) throw error;
//       console.log(result)
//   })

collection.find({}).toArray(function(err, docs) {
    // assert.equal(err, null);
    console.log('Found the following records');
    console.log(docs);
    // callback(docs);

    client.close();
  });


});