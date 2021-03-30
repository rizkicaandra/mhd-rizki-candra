const User = require('../models/User')

class UserController{

  static async findAll(req, res, next){
    try {
      const users = await User.find()
      res.status(200).json({
        message: "successfully find all data",
        data: users
      })
    } catch (error) {
      next(error)
    }
  }

  static async create(req,res,next){
    try {
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const newUser = {
        userName,
        accountNumber: +accountNumber, 
        emailAddress,
        identityNumber: +identityNumber
      }

      if (!userName || !accountNumber || !emailAddress || !identityNumber ){
        throw { 
          name : 'Custom_Error',
          errorCode: 'Validation Error',
          message : 'Invalid Input',
          status : 400 
        }
      }
      const user = await User.create(newUser)
      res.status(201).json({
        message: `successfully added new user ${user.ops[0].userName}`,
        data: user.ops[0]
      })
    } catch (error) {
      next(error)
    }
  }

  static async findByAccountNumber(req,res,next){
    try {
      const { accountNumber } = req.params
      const user = await User.findByAccountNumber(accountNumber)
      if(!user){
        throw { 
          name : 'Custom_Error',
          errorCode: 'Not Found',
          message : 'Data Not Found',
          status : 404 
        }
      }
      res.status(200).json({
        message: 'successfully find data by account number',
        data: user
      })
    } catch (error) {
      next(error)
    }
  }

  static async findByIdentityNumber(req,res,next){
    try {
      const { identityNumber } = req.params
      console.log(identityNumber)
      const user = await User.findByIdentityNumber(identityNumber)
      console.log(user)
      if(!user){
        throw { 
          name : 'Custom_Error',
          errorCode: 'Not Found',
          message : 'Data Not Found',
          status : 404 
        }
      }
      res.status(200).json({
        message: 'successfully find data by identity number',
        data: user
      })
    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req, res, next){
    try {
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const updateUser = {
        userName,
        accountNumber: +accountNumber, 
        emailAddress,
        identityNumber: +identityNumber
      }
      if (!userName || !accountNumber || !emailAddress || !identityNumber ){
        throw { 
          name : 'Custom_Error',
          errorCode: 'Validation Error',
          message : 'Invalid Input',
          status : 400 
        }
      }
      const user = await User.updateUser(req.params.id, updateUser)
      res.status(200).json({
        message: 'successfully updated data',
        data: user.value})
    } catch (error) {
      next(error)
    }
  }

  static async destroyUser(req,res,next){
    try {
      const user = await User.destroyUser(req.params.id)
      res.status(200).json({ message: 'User is successfully deleted'})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController