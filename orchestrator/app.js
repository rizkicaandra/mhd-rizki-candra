const express = require('express')
const app = express()
const PORT = 5000
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.use(errorHandler)

app.listen(PORT, ()=> {
  console.log('app is listening on port :', PORT);
})