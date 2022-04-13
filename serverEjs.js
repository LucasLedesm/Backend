const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const api = require('./routes/api')
const server = require('http').Server(app)
const io = require('socket.io')(server)


let messages = [
];

app.use(express.urlencoded({ extended: true }))
app.use(api)
app.use(express.static('public'))
app.use(bodyparser.json())

// ejs
app.set('view engine', 'ejs') // set the view engine to ejs
app.set('views', './views') // set the views directory


// socket.io
io.on('connection', function(socket) {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages); // Enviamos los mensajes al cliente

    socket.on('new-message', function(data) {
        messages.push(data); // Agregamos el mensaje recibido al array de mensajes
        io.sockets.emit('messages', messages); // Emitimos el array de mensajes a todos los clientes
    });    
});

/* ------------------------------------------------ */
/* Server listener */
const PORT = process.env.PORT || 8080;

const srv = server.listen(PORT, () => { 
    console.log(`Servidor Http con Websockets escuchando en el puerto ${srv.address().port}`);
})
srv.on('error', error => console.log(`Error en servidor ${error}`))