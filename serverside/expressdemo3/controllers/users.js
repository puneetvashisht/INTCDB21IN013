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