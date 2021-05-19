const express = require('express');
const app = express();
require('dotenv').config()
require('colors')
const userRoutes = require('./routes/user')
const workoutRoutes = require('./routes/workout')
const connectToDatabase = require('./db')
const errorHandler = require('./middleware/errorhandler');
const cors = require('cors');

connectToDatabase()

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/workouts', workoutRoutes)

app.use(errorHandler);

app.listen(process.env.APP_PORT, ()=> console.log(`listening on port ${process.env.APP_PORT}`.green.bold))