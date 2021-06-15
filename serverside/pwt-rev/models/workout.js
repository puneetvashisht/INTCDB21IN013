//Schema & Model - structure

const mongoose = require('mongoose');


// 2. Create a schema
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
//   _id: Schema.ObjectId,
  title: {
    type: String,
    minLength: 5,
    unique: true,
    required: [true, 'Provide a title.. It is mandatory']
  },
  desc: {
    type: String
  },
  cbpm: {
       type: Number,
       min: [10, 'Minimum cpbm is 10 cals'],
   },
   user: {
     type: Schema.Types.ObjectId,
     ref: 'User'
    //  ,
    //  required: true
   },
   createdAt: {
       type: Date,
       default: Date.now
   },
   startTime: {
       type: Date
   },
   endTime: {
       type: Date
   }
});

// 3. Model from Schema (object from schema)
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;