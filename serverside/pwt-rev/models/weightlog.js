const mongoose = require('mongoose');


// 2. Create a schema
const Schema = mongoose.Schema;
const WeightLogSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    weight: {
        type: Number,
        max: 500,
        min: 20,
        required: true
    },
    loggedAt: {
        type: Date,
        default: Date.now
    }

})


// 3. Model from Schema (object from schema)
const WeightLog = mongoose.model('WeightLog', WeightLogSchema);

module.exports = WeightLog;