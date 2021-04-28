// import the express library
const express = require('express');
const cors = require('cors')
const colors = require('colors');
const app = express();

// Parse the request with express json parser
app.use(express.json());
app.use(cors());

//static content is in public directory
app.use(express.static('public'))

// logging the req.url
app.use(function (req, res, next) {
    // res.status(404).send("Sorry can't find that!")
    console.log('our first middleware...'.underline.red)
    console.log( (req.method + ' : ' + req.url).green.bold);
    next(); 
})

app.use(function (req, res, next) {
    // res.status(404).send("Sorry can't find that!")
    console.log('our second middleware')
    next(); 
})




// const jsonParser = require('json-parser')

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

app.post('/employees', (req,res)=>{

    // in reality we insert into db
    console.log(req.body);
    employees.push(req.body);
    res.status(201).json(employees);
})

// Http GET for fetching matching ID emplloyee
app.get('/employees/:id', (req,res)=>{
    console.log(req.params.id);
    let foundEmployee = employees.filter((emp) => (emp.id == req.params.id));
    console.log(foundEmployee);
    res.json(foundEmployee);
})

app.delete('/employees/:id', (req,res)=>{

    let foundEmployee = employees.filter((emp) => (emp.id != req.params.id));
    console.log(foundEmployee);
    res.json(foundEmployee);

})

// middleware functionality we can see.
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})


// Listening on the port
app.listen(3004);
