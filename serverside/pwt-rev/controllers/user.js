const User = require('../models/user');
const path = require('path')
const asyncHandler = require('../middleware/async')

// //Generic Method (Select, Sort, Limit)
// const fetchAllUsers = asyncHandler(async(req, res)=>{

//     console.log(req.query.select)
//     console.log(req.query.sort)
//     if(req.query.select){
//         let users = await User.find().select(req.query.select); 
//         res.json({success:true, data:users})
//     }
//     if(req.query.sort){
//         let users = await User.find().sort(req.query.sort); 
//         res.json({success:true, data:users})
//     }
//     // let users = await User.find();
//     // res.json({success:true, data:users})
// })

const fetchAllUsers = asyncHandler(async(req, res)=>{
    res.status(200).json(res.advancedResults);
})

    // const reqQuery = {...req.query};
    // console.log('Req Query object: ', reqQuery)
   
    // //Logic to remove field & delete from reqQuery
    // const removeFields = ['select', 'sort'];
    // removeFields.forEach(param=> delete reqQuery[param])

    // console.log('Req query object after deletion: ', reqQuery);

    // let queryStr = JSON.stringify(reqQuery);

    // let query = User.find(JSON.parse(queryStr))
    

    // // Select fields name,email => name email
    // if(req.query.select){
    //     const fields = req.query.select.split(',').join(' ');
    //     console.log(fields);
    //     query = query.select(fields)
    // }
    // // Sort fields
    // if(req.query.sort){
    //     const sortBy = req.query.sort.split(',').join(' ');
    //     console.log(sortBy);
    //     query = query.sort(sortBy)
    // }
    // else{
    //     query= query.sort('-createdAt')
    // }

    // const users = await query;

    // res.json({success:true, data:users})


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


const uploadProfilePic = asyncHandler(async(req, res, next)=>{
   // find the user .. id;
   let user = await User.findById(req.params.id);
   if(!user) return next({status:404, message: 'User not found'})

   if(!req.files) return next({status:404, message: 'Please upload file'})

    // file instance
   const file = req.files.file

   console.log(file.name);
   file.name = `pic_${user._id}${path.parse(file.name).ext}`

   console.log(file.name);
  
   file.mv(`./public/uploads/${file.name}`, async(err)=>{
        if (err) return next({status:500, message: 'Cant upload file'})

        await User.findByIdAndUpdate(req.params.id, {photo: file.name});
        res.json({success: true, data: file.name})
   })

    // mv to public/uploads

    // update the user model with path

})

module.exports = {fetchAllUsers, registerUser, loginUser, uploadProfilePic}