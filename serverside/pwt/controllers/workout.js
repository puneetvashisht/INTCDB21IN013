// Req, res operations


const Workout = require('../models/workout')
// const workoutRepo = require('../repos/workout')

const fetchAllWorkouts = async(req,res, next) => {

    try{
        let workouts = await Workout.find();
        res.json(workouts);
    }
    catch(err){
        next(err);
    }
    
    
    // workoutRepo.findAllWorkouts((data)=>{
    //     res.json(data);
    // })
        
}

const addWorkouts = async(req,res,next) => {

    try{
        let workoutRes = await Workout.create(req.body);
        console.log(workoutRes);
        res.status(201).json({success: true})
    }
    catch(err){
        console.log(err);
        next(err);
    }
    

      //repos ... 
      
      // if sync : use throw new Error('error message');
      // if async: use next('error message/object')

        // workoutRepo.insertWorkout(req.body, ()=>{
        //     // if(err){
        //     //     next(err)
        //     // } 
        //     // else{
        //     //     res.status(201).json({success: true})
        //     // }

        //     res.status(201).json({success: true})
            
        // })
}

module.exports = {fetchAllWorkouts,addWorkouts}