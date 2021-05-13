// Just mapping HTTP methods & Url to functions in controllers

var express = require('express')
var app = express()
var router = express.Router()

const {fetchAllWorkouts,addWorkouts, startWorkout, endWorkout} = require('../controllers/workout')


router.route('/')
.get(fetchAllWorkouts)
.post(addWorkouts)

router.route('/start/:title')
.patch(startWorkout)

router.route('/end/:title')
.patch(endWorkout)

// // Fetch the data -- Http GET
// router.get('/', workoutController.fetchAllWorkouts)
// // Send the data to server - Http POST
// router.post('/', workoutController.addWorkouts)

module.exports = router