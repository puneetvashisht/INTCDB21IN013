// import the express library
const express = require('express');
const app = express();

// employees array
let employees = [
    {id: 23, name:"Ravi", salary: 34343.34},
    {id: 2, name:"Priya", salary: 24343.34}
]

app.get('/hello', function(req,res){
    res.json({message: "Hello world from express!!"})
})

// Http GET for fetching all emplloyees
app.get('/employees', (req,res)=>{
    res.json(employees);
})

// Http GET for fetching matching ID emplloyee
app.get('/employees/:id', (req,res)=>{
    console.log(req.params.id);
    let foundEmployee = employees.filter((emp) => (emp.id == req.params.id));
    console.log(foundEmployee);
    res.json(foundEmployee);
})


// Listening on the port
app.listen(3000);
