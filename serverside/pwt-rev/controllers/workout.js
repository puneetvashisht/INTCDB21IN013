// Req, res operations


const Workout = require('../models/workout')
const asyncHandler = require('../middleware/async');
// const workoutRepo = require('../repos/workout')



const fetchAllWorkouts = asyncHandler(async(req,res, next) => {




    res.json(res.advancedResults);
    // try{
        // let workouts = await Workout.find();
        // res.json({success:true, data:workouts});
    // workoutRepo.findAllWorkouts((data)=>{
    //     res.json(data);
    // })
        
})

const addWorkouts = asyncHandler(async(req,res,next) => {




    // try{
        let workoutRes = await Workout.create(req.body);
        console.log(workoutRes);
        res.status(201).json({success: true})
    // }
    // catch(next)
    // catch(err){
    //     console.log(err);
    //     next(err);
    // }
    

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
})


const startWorkout = asyncHandler(async(req,res,next) => {

    let workout = await Workout.findOneAndUpdate({title: req.params.title}, {startTime: new Date()},{
        new: true,
        runValidators: true
    })
    console.log(workout)
    if(!workout) throw new Error(`Could not find workout with title ${req.params.title}`)
    res.json({success:true, data: workout});
    
    // Workout.findOneAndUpdate({title: req.params.title}, {startTime: new Date()}, (err, doc)=>{
    //     if(err) next(err);
    //     res.json({success:true});
    // })

})

const endWorkout = asyncHandler(async(req,res,next) => {

    let workout = await Workout.findOneAndUpdate({title: req.params.title}, {endTime: new Date()},{
        new: true,
        runValidators: true
    })
    console.log(workout)
    if(!workout) throw new Error(`Could not find workout with title ${req.params.title}`)
    res.json({success:true, data: workout});
    
})

const fetchWorkoutsByUser = asyncHandler(async(req,res,next) => {
    let workouts = await Workout.find({user: req.params.userid});
    res.json({success:true, data: workouts})
})

module.exports = {fetchAllWorkouts,addWorkouts, startWorkout, endWorkout, fetchWorkoutsByUser}