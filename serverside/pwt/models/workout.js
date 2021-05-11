//Schema & Model - structure

const mongoose = require('mongoose');


// 2. Create a schema
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Provide a title.. It is mandatory']
  },
  desc: {
    type: String
  },
  cbpm: {
       type: Number,
       min: [10, 'Minimum cpbm is 10 cals'],
   },
   createdAt: {
       type: Date,
       default: Date.now
   }
});

// 3. Model from Schema (object from schema)
const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;