const { compareSync } = require('bcrypt')
var express = require('express')
var router = express.Router()
const {fetchAllUsers, registerUser, loginUser} = require('../controllers/user')
const {protect} = require('../middleware/auth');
const advancedFind = require('../middleware/advancedFind');

const User = require('../models/user');
// logging the req.url


// console.log(User);

// router.get('/', fetchAllUsers)
router.route('/')
.get(advancedFind(User) ,fetchAllUsers)
// .get(fetchNameAndEmail)
// .get(fetchUsersSortByName)
// .get(fetchUsersByName)
.post(registerUser);



router.route('/login')
.post(loginUser);


module.exports = router