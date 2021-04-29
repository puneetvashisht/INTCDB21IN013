
// Library import
const express = require('express');
// Initialize express
const app = express();
const todos = require('./routes/todos')

// parse request data to json
app.use(express.json())



// mapping url to a function
app.get('/hello', function(req,res){  
   // Send text/html use send 
   // res.send('<h2>hello again!!</h2>'); 
    // Send application/json use json
   res.json({x: '334'});
})


app.use('/todos', todos)
// app.use('/courses', courses)

// listen on port, host
app.listen(3000, ()=>{
    console.log('listening on port: 3000')
})

