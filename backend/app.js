require('dotenv').config({path: "./config.env"})
const express = require('express')
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
const authRoute = require('./routers/auth')

app.use('/api/auth', authRoute)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
