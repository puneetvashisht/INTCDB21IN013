
var express = require('express')
var router = express.Router()
const {addWeightLog, fetchWeightLog} = require('../controllers/weightlog')
const {protect} = require('../middleware/auth');
const advancedFind = require('../middleware/advancedFind');

const WeightLog = require('../models/weightlog');

router.route('/')
.get(advancedFind(WeightLog), fetchWeightLog)
.post( addWeightLog)

module.exports = router