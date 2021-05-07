const mongoose = require('mongoose');


// 2. Create a schema
const Schema = mongoose.Schema;
const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Provide a text value.. It is mandatory']
  },
   salary: {
       type: Number,
       min: [10000, 'Minimum salary is 10k'],
   }
});

// 3. Model from Schema (object from schema)
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;