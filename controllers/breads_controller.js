const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')
// INDEX
breads.get('/', (req, res) => {
    res.render('Index' , {
        'breads': Bread,
        title: 'Index Page'
    }
)
    // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    console.log('req.params')
    console.log(req.params)
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', { bread: Bread[req.params.arrayIndex]})
    } else {
        res.send('404')
    }
})

module.exports = breads