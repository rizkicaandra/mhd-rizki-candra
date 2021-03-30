if(process.env.NODE_ENV == 'development' || process.env.NODE_ENV == 'test'){
  require('dotenv').config()
}

const express = require('express')
const { connect } = require('./config/mongodb')
const routes = require('./routes/index')
const app = express()
const PORT = 5001
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)

connect().then((db) => {
  app.listen(PORT, () => {
    console.log('app is listening on port : ', PORT)
  })
})