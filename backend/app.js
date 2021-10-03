require('dotenv').config({path: "./config.env"})
const express = require('express')
const connectDB  =require('./config/db')
// connect ot database
connectDB()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
const authRoute = require('./routers/auth')

app.use('/api/auth', authRoute)

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})
