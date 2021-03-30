const router = require('express').Router()
const userRoutes = require('./user')
const userIdentityNumberRoutes = require('./userIdentityNumber')
const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize')

router.use(authenticate)
router.use(authorize)

router.use('/users', userRoutes)

router.use('/identitynumber', userIdentityNumberRoutes )

module.exports = router
