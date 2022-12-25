//const http = require('http')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
//const Blog = require('./models/blog.js')
const config = require('./utils/config.js')
//const middleware = require('./utils/middleware')
const logger = require('./utils/logger.js')
const blogsRouter = require('./controllers/blogs.js')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
    .then(logger.info('connected to MongoDB'))
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

app.use(cors())
app.use(express.json())
  
app.use('/api/blogs', blogsRouter)

module.exports = app