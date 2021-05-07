const express = require('express');
const app = express();
const cors = require('cors')
const employeeRoutes = require('./controllers/employee')


app.use(cors())

//parse the incoming http request to json
app.use(express.json())


// route for employees
app.use('/employees', employeeRoutes);


app.listen(8080, ()=> console.log('listening on port 8080'))