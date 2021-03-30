const router = require('express').Router()
const usersRoutes = require('./user')
const generateTokenController = require('../controllers/generateToken')
const UserController = require('../controllers/user')

router.post('/generatetoken', generateTokenController.generateToken)

router.use('/users', usersRoutes)

router.get('/identitynumber/:identityNumber', UserController.findByIdentityNumber)

module.exports = router