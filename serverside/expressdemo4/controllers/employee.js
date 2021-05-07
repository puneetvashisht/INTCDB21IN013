var express = require('express')
var app = express()
var router = express.Router()

const employeeRepo = require('../repos/employee')


router.post("/", (req,res)=>{
    let employee = req.body
    employeeRepo.insertEmployee(employee, function(){
        res.status(201).json({success: true})
    })
})

router.get("/", (req,res)=>{
    employeeRepo.findAllEmployees((data)=>{
        res.json(data)
    })
})

router.delete("/:name", (req,res)=>{
    employeeRepo.deleteEmployee(req.params.name, ()=>{
        res.json({success: true})
    })
})

router.patch("/", (req,res)=>{
    let employee = req.body
    employeeRepo.updateEmployee(employee, ()=>{
        res.json({success: true})
    })
})



module.exports = router;