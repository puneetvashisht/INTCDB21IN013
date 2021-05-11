// Req, res operations

const workoutRepo = require('../repos/workout')

const fetchAllWorkouts = (req,res) => {
    workoutRepo.findAllWorkouts((data)=>{
        res.json(data);
    })
        
}

const addWorkouts = (req,res) => {
      //repos ... 
    workoutRepo.insertWorkout(req.body, ()=>{
        res.status(201).json({success: true})
    })
}

module.exports = {fetchAllWorkouts,addWorkouts}