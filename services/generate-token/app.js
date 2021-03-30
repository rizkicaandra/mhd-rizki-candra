if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test'){
  require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = 5002
const routes = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(PORT, ()=> {
  console.log('app is listening on port :', PORT);
})