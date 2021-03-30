const { generateToken } = require('../helpers/jwt')

class GenerateToken{
  static generateToken(req,res){
    try {
      if(!req.body.email){
        throw { error: 'Email must be filled'}
      }
      const access_token = generateToken({
        email: req.body.email,
      })
      res.status(200).json({ access_token })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = GenerateToken