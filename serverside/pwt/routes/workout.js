// Just mapping HTTP methods & Url to functions in controllers

var express = require('express')
var app = express()
var router = express.Router()

const workoutController = require('../controllers/workout')


// Fetch the data -- Http GET
router.get('/', workoutController.fetchAllWorkouts)
// Send the data to server - Http POST
router.post('/', workoutController.addWorkouts)

module.exports = router