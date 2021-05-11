// DB operations

// Mongoose
const mongoose = require('mongoose');
const Workout = require('../models/workout')

// 4.Connection to db
console.log('attempting to connect')

// 4. Create connection
  mongoose.connect('mongodb://localhost:27017/ctsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });



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