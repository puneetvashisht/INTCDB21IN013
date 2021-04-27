
// Library import
const express = require('express');
// Initialize express
const app = express();

// parse request data to json
app.use(express.json())

var todos =  [
    {text: 'Buy milk', done:true},
    {text: 'Jogging', done:true}
]

// mapping url to a function
app.get('/hello', function(req,res){  
   // Send text/html use send 
   // res.send('<h2>hello again!!</h2>'); 
    // Send application/json use json
   res.json({x: '334'});
})

// Fetch the data -- Http GET
app.get('/todos', (req,res)=>{
    res.json(todos);
})

// Fetch specific todo (using index)-- Http GET
app.get('/todos/:index', (req,res)=>{
    if(todos.length >  req.params.index){
        res.json(todos[req.params.index])
    }
    else{
        res.status(404).json({message:"Index not found.."})
    }
    
})

// Send the data to server - Http POST
app.post('/todos', (req,res)=>{
    console.log(req.body)
    todos.push(req.body)
    res.status(201).json(todos);
})

// Delete data on server - Http DELETE
app.delete('/todos/:index', (req,res)=>{
    if(todos.length >  req.params.index){
        todos.splice(req.params.index, 1);
        res.json(todos);
    }
    else{
        res.status(404).json({message:"Index not found.."})
    }    
})

// Update data on server - Http PUT/PATCH
app.put('/todos/:index', (req,res)=>{
    todos[req.params.index] = req.body;
    res.json(todos);
})


// listen on port, host
app.listen(3000, ()=>{
    console.log('listening on port: 3000')
})

