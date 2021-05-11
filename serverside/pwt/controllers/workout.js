// Req, res operations

const workoutRepo = require('../repos/workout')

const fetchAllWorkouts = (req,res) => {

    
    workoutRepo.findAllWorkouts((data)=>{
        res.json(data);
    })
        
}

const addWorkouts = (req,res,next) => {
      //repos ... 
      
      // if sync : use throw new Error('error message');
      // if async: use next('error message/object')

        workoutRepo.insertWorkout(req.body, (err)=>{
            if(err){
                next(err)
            } 
            else{
                res.status(201).json({success: true})
            }
            
        })
}

module.exports = {fetchAllWorkouts,addWorkouts}