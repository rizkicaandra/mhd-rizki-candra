const router = require('express').Router()
const generateTokenController = require('../controllers/generateToken')

router.post('/generatetoken', generateTokenController.generateToken)

module.exports = router