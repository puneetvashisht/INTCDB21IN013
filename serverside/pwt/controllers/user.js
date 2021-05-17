const User = require('../models/user');
const asyncHandler = require('../middleware/async');

const addUser = asyncHandler(async(req,res,next) => {
//Operatons on model

    let user = await User.create(req.body);
    console.log(user);
    res.status(201).json({success:true, data: user})
})

const fetchAllUsers = asyncHandler(async(req,res,next) => {
    let users = await User.find();
    res.json({success:true, data: users})
})

module.exports = {addUser, fetchAllUsers}