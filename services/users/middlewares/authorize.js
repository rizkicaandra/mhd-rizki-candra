
function authorize(req, res, next){

  try{
    if(req.user.email == 'admin@mail.com'){
      next()
    } else {
      throw {
        name : 'Custom_Error',
        errorCode: 'Not Authorized',
        message : 'Not Authorized',
        status : 401
      }
    } 
  }catch(error){
    console.log(error)
  }
}

module.exports = authorize