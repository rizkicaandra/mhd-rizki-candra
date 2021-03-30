const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/:identityNumber', UserController.findByIdentityNumber)

module.exports = router