const User = require('../models/User');

const asyncHandler = require('../middleware/async')

const fetchAllUsers = asyncHandler(async(req, res)=>{
    let users = await User.find();
    res.json({success:true, data:users})
})

const registerUser = asyncHandler(async(req, res)=>{
    let user = await User.create(req.body);
    res.status(201).json({success:true, data:user})
})

const loginUser = asyncHandler(async(req, res)=>{

    let {email, password} = req.body;
    
    let user = await User.findOne({email});

    // User.matchPassword

    const isMatch = await user.matchPassword(password);
    if(!isMatch) throw new Error('Invalid username/password!!')

    console.log(user);
    res.json({success:true, data:user})
})

module.exports = {fetchAllUsers, registerUser, loginUser}