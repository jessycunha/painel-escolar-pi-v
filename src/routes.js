const express = require('express')
const routes = express.Router()
const api = require('../api/exemplo-api')
const boletim = require('../api/boletim')


routes.get('/', (req, res) => {
    return res.render('index')
})

routes.get('/student', (req, res) => {
    return res.render('student', { boletim })
})

module.exports = routes