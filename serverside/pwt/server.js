const express = require('express');
const app = express();
const cors = require('cors')
require('colors');
require('dotenv').config()
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')
const errorHandler = require('./middleware/errorhandler')
const connectToDatabase = require('./db.js')


app.use(cors())

//parse the incoming http request to json
app.use(express.json())

connectToDatabase();

// route for workout
app.use('/api/v1/workouts', workoutRoutes);
// route for users
app.use('/api/v1/users', userRoutes);


app.get('/test', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
})


app.use(errorHandler);

app.listen(process.env.APP_PORT, ()=> console.log(`listening on port ${process.env.APP_PORT}`))