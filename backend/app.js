require('dotenv').config({path: "./config.env"})
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Sample")
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})