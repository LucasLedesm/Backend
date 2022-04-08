const express = require('express')
const bodyparser = require('body-parser')
const api = require('./routes/api')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(api)
app.use(express.static('public'))
app.use(bodyparser.json())

// pug

app.set('view engine', 'pug')
app.set('index', './views')


/* ------------------------------------------------ */
/* Server listener */
const PORT = 8080
const server = app.listen(PORT)
server.on('error', (error) => console.log(`Error en servidor ${error}`))