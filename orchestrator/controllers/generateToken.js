const axios = require("axios");
const { generateTokenBaseURL } = require('../helpers/reference')

class GenerateToken{
  static async generateToken(req, res){
    try {
      const access_token = await axios.post(generateTokenBaseURL, req.body)
      res.status(200).json(access_token.data)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = GenerateToken