// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log (PORT)

// MIDDLEWARE
//app.use(express.json())

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// BREADS
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => {
    console.log('proofing at port', PORT);
})