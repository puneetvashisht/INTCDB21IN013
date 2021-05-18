var express = require('express')
var router = express.Router()
const {fetchAllUsers, registerUser, loginUser} = require('../controllers/user')


// router.get('/', fetchAllUsers)
router.route('/')
.get(fetchAllUsers)
.post(registerUser);


router.route('/login')
.post(loginUser);


module.exports = router