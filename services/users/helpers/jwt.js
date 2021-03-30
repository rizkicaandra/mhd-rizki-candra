var jwt = require('jsonwebtoken');

function verify(token){
  return jwt.verify(token,process.env.JWT_SECRET)
}

module.exports = {
  verify
}