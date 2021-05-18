const express = require('express');
const app = express();
require('dotenv').config()
require('colors')
const userRoutes = require('./routes/user')
const connectToDatabase = require('./db')
const errorHandler = require('./middleware/errorhandler');

connectToDatabase()

app.use(express.json());

app.use('/api/v1/users', userRoutes)

app.use(errorHandler);

app.listen(process.env.APP_PORT, ()=> console.log(`listening on port ${process.env.APP_PORT}`.green.bold))