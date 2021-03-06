const express = require('express');
const app = express();
const cors = require('cors')

const userRoutes = require('./controllers/users')
const todoRoutes = require('./controllers/todos')

app.use(cors())

//parse the incoming http request to json
app.use(express.json())

app.use(express.static('client-app/dist'))

// route for users
app.use('/users', userRoutes);
// route for todos
app.use('/todos', todoRoutes)



app.listen(8080, ()=> console.log('listening on port 8080'))