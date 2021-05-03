const express = require('express');
const app = express();

const userRoutes = require('./controllers/users')

//parse the incoming http request to json
app.use(express.json())
app.use('/users', userRoutes);

app.listen(3000, ()=> console.log('listening on port 3000'))