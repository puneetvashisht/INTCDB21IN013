const User = require('../models/User');


const asyncHandler = require('../middleware/async')

//Generic Method (Select, Sort, Limit)
const fetchAllUsers = asyncHandler(async(req, res)=>{
    console.log(req.query.select)
    console.log(req.query.sort)
    if(req.query.select){
        let users = await User.find().select(req.query.select); 
        res.json({success:true, data:users})
    }
    if(req.query.sort){
        let users = await User.find().sort(req.query.sort); 
        res.json({success:true, data:users})
    }
    // let users = await User.find();
    // res.json({success:true, data:users})
})

// const fetchAllUsersSortedByName = asyncHandler(async(req, res)=>{
//     let users = await User.find().sort('name');
//     res.json({success:true, data:users})
// })

// const fetchAllUsersByNameAndEmail = asyncHandler(async(req, res)=>{
//     let users = await User.find().select('name email');
//     res.json({success:true, data:users})
// })

const registerUser = asyncHandler(async(req, res)=>{
    let user = await User.create(req.body);
    const token = await user.generateToken();
    res.status(201).json({success:true, token})
})

const loginUser = asyncHandler(async(req, res)=>{

    let {email, password} = req.body;
    
    let user = await User.findOne({email});

    // User.matchPassword

    const isMatch = await user.matchPassword(password);
    if(!isMatch) throw new Error('Invalid username/password!!')

    console.log(user);


    const token = await user.generateToken();
    // console.log(token);
    // var token = jwt.sign({ id: user._id, email: user.email }, 'shhhhh');

    // token instead of user
    // res.json({success:true, data:user})
    res.json({success:true, token})

})

module.exports = {fetchAllUsers, registerUser, loginUser}