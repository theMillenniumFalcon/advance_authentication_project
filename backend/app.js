require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB  =require('./config/db')
const authRoute = require('./routers/auth')
const errorHandler = require('./middleware/error')
// connect to database
connectDB()
const app = express()
app.use(express.json())
app.use('/api/auth', authRoute)
// Error handler --> should be last piece of middleware --> uesd to catch all the errors
app.use(errorHandler)

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
