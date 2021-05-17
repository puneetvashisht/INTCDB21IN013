
var express = require('express')
var app = express()
var router = express.Router()

const {fetchAllUsers,addUser} = require('../controllers/user')


router.route('/')
.get(fetchAllUsers)
.post(addUser)

module.exports = router