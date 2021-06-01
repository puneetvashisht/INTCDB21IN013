const WeightLog = require('../models/weightlog');
const asyncHandler = require('../middleware/async')


const addWeightLog = asyncHandler(async(req, res)=>{
    let weightLog = await WeightLog.create(req.body);
    res.status(201).json({success:true, data:weightLog})
})


const fetchWeightLog = asyncHandler(async(req,res, next) => {
    res.json(res.advancedResults);
})

module.exports = {addWeightLog, fetchWeightLog}