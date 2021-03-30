const axios = require("axios");
const Redis = require("ioredis");
const redis = new Redis()
const { usersBaseURL, identityBaseURL } = require('../helpers/reference')

class User{
  static async findAll(req, res, next){
    try {
      const userData = await redis.get("user:data")
      if(userData){
        res.status(200).json(JSON.parse(userData))
      } else {
        const users = await axios.get(usersBaseURL, {
          headers: {
            access_token: req.headers.access_token
          }
        })
        redis.set("user:data", JSON.stringify(users.data))
        res.status(200).json(users.data)
      }
    } catch (error) {
      next(error)
    }
  }

  static async create(req,res, next){
    try {
      await redis.del("user:data")
      const newUser = await axios.post(usersBaseURL, req.body, {
        headers: {
          access_token: req.headers.access_token
        }
      })
      res.status(201).json(newUser.data)
    } catch (error) {
      next(error)
    }
  }

  static async findByAccountNumber(req, res, next){
    try {
      const user = await axios.get(usersBaseURL + req.params.accountNumber, {
        headers: {
          access_token: req.headers.access_token
        }
      })
      res.status(200).json(user.data)
    } catch (error) {
      next(error)
    }
  }

  static async findByIdentityNumber(req, res, next){
    try {
      const user = await axios.get(identityBaseURL + req.params.identityNumber, {
        headers: {
          access_token: req.headers.access_token
        }
      })
      res.status(200).json(user.data)
    } catch (error) {
      next(error)
    }
  }

  static async updateUser(req, res, next){
    try {
      await redis.del("user:data")
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const updateUser = {
        userName,
        accountNumber, 
        emailAddress,
        identityNumber
      }
      const user = await axios.put(usersBaseURL + req.params.id, updateUser, {
        headers: {
          access_token: req.headers.access_token
        }
      })
      res.status(200).json(user.data)
    } catch (error) {
      next(error)
    }
  }

  static async destroyUser(req,res,next){
    try {
      await redis.del("user:data")
      const user = await axios.delete(usersBaseURL + req.params.id, {
        headers: {
          access_token: req.headers.access_token
        }
      })
      res.status(200).json(user.data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = User