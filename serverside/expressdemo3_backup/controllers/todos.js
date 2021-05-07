// operations on todos
// POST, GET, DELETE ...

var express = require('express')
var app = express()
var router = express.Router()

const todoRepo = require('../repos/todos')





var todos =  [
    {text: 'Buy milk', done:true},
    {text: 'Jogging', done:true}
]

// Fetch the data -- Http GET
router.get('/', (req,res)=>{
    // res.json(todos);
    todoRepo.fetchAllTodos(function(data){
        res.json(data);
    });
    
})

// Fetch specific todo (using index)-- Http GET
router.get('/:index', (req,res)=>{
    if(todos.length >  req.params.index){
        res.json(todos[req.params.index])
    }
    else{
        res.status(404).json({message:"Index not found.."})
    }
    
})

// Send the data to server - Http POST
router.post('/', (req,res)=>{
    console.log(req.body)
    // Insert to db
    // solution with callbacks
    // todoRepo.insertTodo(req.body, function(){
    //     res.status(201).json({"success": "true", "message": "Record successfully inserted"});
    // });

    // solution with promises
    todoRepo.insertTodo(req.body)
    .then((data)=> {
        res.status(201).json(data);
    })
    .catch(err=> {
        res.status(500).json(err);
    })
})

// Delete data on server - Http DELETE
router.delete('/:index', (req,res)=>{
    if(todos.length >  req.params.index){
        todos.splice(req.params.index, 1);
        res.json(todos);
    }
    else{
        res.status(404).json({message:"Index not found.."})
    }    
})

// Update data on server - Http PUT/PATCH
router.put('/:index', (req,res)=>{
    todos[req.params.index] = req.body;
    res.json(todos);
})

module.exports = router