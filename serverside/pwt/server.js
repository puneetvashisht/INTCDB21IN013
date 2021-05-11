const express = require('express');
const app = express();
const cors = require('cors')
const workoutRoutes = require('./routes/workout')
const errorHandler = require('./middleware/errorhandler')


app.use(cors())

//parse the incoming http request to json
app.use(express.json())


// route for workout
app.use('/workouts', workoutRoutes);

app.get('/test', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
})


app.use(errorHandler);

app.listen(8080, ()=> console.log('listening on port 8080'))