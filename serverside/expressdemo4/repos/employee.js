// Mongoose
const mongoose = require('mongoose');
const Employee = require('../models/employee')

// 4.Connection to db
console.log('attempting to connect')

// 4. Create connection
  mongoose.connect('mongodb://localhost:27017/ctsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });



function insertEmployee(employee, fn){
    console.log('db code in invoked')

    let empObj = new Employee();
    empObj.name = employee.name
    empObj.salary = employee.salary

    empObj.save((err)=>{
        if(err) throw err;
        fn();
    })
}


function findAllEmployees(fn){
    Employee.find({}, (err,docs)=>{
        if(err) throw err;
        fn(docs);
    })
}

function deleteEmployee(name, fn) {
    Employee.deleteOne({name}, (err)=>{
        if(err) throw err;
        fn();
    })
}


function updateEmployee(employee, fn){
    // Employee.updateOne()
    Employee.updateOne({ name: employee.name }, {salary: employee.salary }, function(err, res) {
        if(err) throw err;
        fn();
    });
}

module.exports = {insertEmployee,findAllEmployees, deleteEmployee, updateEmployee }