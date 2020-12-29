const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const analyticsRoutes = require('./routes/analytics')
const themeRoutes = require('./routes/theme')
const homeworkRoutes = require('./routes/homework')
const taskRoutes = require('./routes/task')
const keys = require('./config/keys')
const app = express()

mongoose.connect(keys.mongoURI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log(' MongoDB is connected.'))
    .catch(error => console.log(error))

app.use(require('morgan')('dev'))
app.use(require('cors')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/theme', themeRoutes)
app.use('/api/homework', homeworkRoutes)
app.use('/api/task', taskRoutes)

module.exports = app
