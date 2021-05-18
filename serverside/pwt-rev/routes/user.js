var express = require('express')
var router = express.Router()
const {fetchAllUsers, registerUser} = require('../controllers/user')


// router.get('/', fetchAllUsers)
router.route('/')
.get(fetchAllUsers)
.post(registerUser);


module.exports = router