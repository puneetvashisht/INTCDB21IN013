// Just mapping HTTP methods & Url to functions in controllers

var express = require('express')
var app = express()
var router = express.Router()
const {protect, authorize} = require('../middleware/auth');
const {fetchAllWorkouts,addWorkouts, startWorkout, endWorkout, fetchWorkoutsByUser} = require('../controllers/workout')


router.route('/')
.get(protect, fetchAllWorkouts)
.post(protect, authorize('trainer', 'admin') ,addWorkouts)

router.route('/start/:title')
.patch(protect, authorize('user'), startWorkout)

router.route('/end/:title')
.patch(protect, authorize('user'), endWorkout)

router.route('/:userid')
.get(protect, fetchWorkoutsByUser)

// // Fetch the data -- Http GET
// router.get('/', workoutController.fetchAllWorkouts)
// // Send the data to server - Http POST
// router.post('/', workoutController.addWorkouts)

module.exports = router