const express = require('express');
const app = express();



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

const Server = app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${Server.address().port}`);  // imprime en consola el puerto en el que esta corriendo el servidor

});

Server.on("error", error => { console.log(error); });