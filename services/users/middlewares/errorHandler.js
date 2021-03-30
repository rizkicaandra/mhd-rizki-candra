function errorHandler(err,req,res,next){

//   console.log(err)

   if (err.name == 'Custom_Error'){
      return res.status(err.status).json({ error: {
         name : err.name,
         errorCode: err.errorCode,
         message: err.message,
         status: err.status
      }})
   } else if (err.name == 'JsonWebTokenError'){
      return res.status(401).json({ error: 'Invalid token' }) 
   } else {
      return res.status(500).json({ error: 'Internal Server Error' })
   }

}

module.exports = errorHandler