const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/',UserController.findAll)

router.post('/',UserController.create)

router.get('/:accountNumber', UserController.findByAccountNumber)

router.put('/:id', UserController.updateUser)

router.delete('/:id', UserController.destroyUser)

module.exports = router
