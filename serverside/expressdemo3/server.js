const express = require('express');
const app = express();
const cors = require('cors')

const userRoutes = require('./controllers/users')

app.use(cors())

//parse the incoming http request to json
app.use(express.json())

app.use(express.static('client-app/dist'))

app.use('/users', userRoutes);



app.listen(8080, ()=> console.log('listening on port 8080'))