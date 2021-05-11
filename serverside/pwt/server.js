const express = require('express');
const app = express();
const cors = require('cors')

const workoutRoutes = require('./routes/workout')


app.use(cors())

//parse the incoming http request to json
app.use(express.json())


// route for workout
app.use('/workouts', workoutRoutes);


app.listen(8080, ()=> console.log('listening on port 8080'))