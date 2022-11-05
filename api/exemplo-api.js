const axios = require('axios')

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

module.exports = api

// PARA ROUTES

// routes.get('/pokemon', async (req, res) => {
//     try {
//         const {data} = await api.get('pokemon/1')
//         return res.send({ name: data.name })
//     } catch (error) {
//         res.send({ error: error.message })
//     }
// })