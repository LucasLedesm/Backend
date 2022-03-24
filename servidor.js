const express = require('express');
const app = express();



const server = http.createServer((req, res) => {
    res.end('Hola Mundo');
});

app.get("/", (req, res) => {
    res.send("Hola Mundo");
})

app.get("/productos", (req, res) => {
    res.send("Hola Mundo");
})

app.get("/productoRandom", (req, res) => {
    res.send("Hola Mundo");
})



const port = 8080;  // puerto   8080    

const connectedServer = server.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);  // imprime en consola el puerto en el que esta corriendo el servidor

});

server.on("error", error => { console.log(error); });