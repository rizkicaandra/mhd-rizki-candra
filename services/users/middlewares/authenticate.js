const { verify } = require('jsonwebtoken')

function authenticate(req,res,next){
  try{
    if(!req.headers.access_token){
      throw {
        name : 'Custom_Error',
        errorCode: 'Not Authorized',
        message : 'Not Authorized',
        status : 401
      }
    }
    const token = req.headers.access_token
    const decode = verify(token, process.env.JWT_SECRET)
    req.user = decode
    next()
  } catch(error){
    console.log(error)
    next(error)
  }
}

module.exports = authenticate