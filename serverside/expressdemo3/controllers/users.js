var express = require('express')
var app = express()
var router = express.Router()

const userRepo = require('../repos/users')


router.post('/', (req,res)=>{
    // db insert call
    userRepo.insertUser(req.body)
    .then(data=>{
        res.status(201).json(data);
    })
})

router.post('/authenticate', (req,res)=>{
    // logic to validate paasword
    // find User by name
    userRepo.findUserByName(req.body.name, function(data){
        console.log(data)
        if(req.body.password == data.password){
            res.json({auth: true})
        }
        else{
            res.json({auth: false})
        }
    })
    // if user found, compare password
    // if passwords are same, return success, else failure
})

router.get('/', (req,res)=>{
    userRepo.findAllUsers((data)=>{
        res.json(data);
    })

})

router.delete('/:name', (req,res)=>{
    console.log(req.params.name)
    userRepo.deleleUser(req.params.name)
    .then(data=>{
        res.status(200).json(data);
    })

})


module.exports = router;