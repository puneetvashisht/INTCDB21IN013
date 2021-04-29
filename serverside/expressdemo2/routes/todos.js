var express = require('express')
var app = express()
var router = express.Router()
var todos =  [
    {text: 'Buy milk', done:true},
    {text: 'Jogging', done:true}
]

// Fetch the data -- Http GET
router.get('/', (req,res)=>{
    res.json(todos);
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
    todos.push(req.body)
    res.status(201).json(todos);
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