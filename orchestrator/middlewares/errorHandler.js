function errorHandler(err,req,res,next){

  console.log(err, 'ini dari orchestratornya')

   if (err.response.data.error.name == 'Custom_Error'){
      return res.status(err.response.data.error.status).json(err.response.data.error)
   } else if (err.response.status == 401){
      return res.status(401).json({errorCode: err.response.statusText, Message: "Invalid Token"}) 
   } else {
      return res.status(500).json({error: 'Internal Server Error'})
   }

}

module.exports = errorHandler