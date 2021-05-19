const { compareSync } = require('bcrypt')
var express = require('express')
var router = express.Router()
const {fetchAllUsers, registerUser, loginUser} = require('../controllers/user')
const {protect} = require('../middleware/auth');


// logging the req.url


// router.get('/', fetchAllUsers)
router.route('/')
.get(protect, fetchAllUsers)
.post(registerUser);


router.route('/login')
.post(loginUser);


module.exports = router