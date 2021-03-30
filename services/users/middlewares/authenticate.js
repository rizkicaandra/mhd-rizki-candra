const { verify } = require('jsonwebtoken')

function authenticate(req,res,next){
  try{
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