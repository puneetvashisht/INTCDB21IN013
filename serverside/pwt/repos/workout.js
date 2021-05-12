// DB operations


const Workout = require('../models/workout')

console.log('attempting to connect')

function insertWorkout(workout, fn){
    console.log('db code in invoked')

    let workoutObj = new Workout();
    workoutObj.title = workout.title
    workoutObj.desc = workout.desc
    workoutObj.cbpm = workout.cbpm
    workoutObj.save((err)=>{
        // if(err) throw err;
        fn(err);
    })
}


function findAllWorkouts(fn){
    Workout.find({}, (err,docs)=>{
        if(err) throw err;
        fn(docs);
    })
}


module.exports = {insertWorkout,findAllWorkouts }