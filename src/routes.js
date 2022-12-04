const express = require('express')
const routes = express.Router()
const boletim = require('../api/boletim')

routes.get('/', (req, res) => {
    return res.render('index')
})

routes.get('/student', (req, res) => {
    return res.render('student', { boletim })
})

routes.get('/student/b1', boletim.bimestreUm)
routes.get('/student/b2', boletim.bimestreDois)

module.exports = routes