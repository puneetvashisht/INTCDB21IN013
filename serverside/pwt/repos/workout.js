// DB operations


const Workout = require('../models/workout')

console.log('attempting to connect')


function insertWorkout(workout, fn){
    // console.log('db code in invoked')

    // try{
    //   let workoutRes = await Workout.create(workout);
    //   console.log(workoutRes);
    // }
    // catch(err){
    //   console.log(err.orange)
    // }
    

    // Workout.create(workout, function (err, small) {
    //   fn(err);
    //   // saved!
    // });
    

    // let workoutObj = new Workout();
    // workoutObj.title = workout.title
    // workoutObj.desc = workout.desc
    // workoutObj.cbpm = workout.cbpm
    // workoutObj.save((err)=>{
    //     // if(err) throw err;
    //     fn(err);
    // })
}


function findAllWorkouts(fn){
    Workout.find({}, (err,docs)=>{
        if(err) throw err;
        fn(docs);
    })
}


module.exports = {insertWorkout,findAllWorkouts }