const express = require('express');
const app = express();
const container = require('./controllers/index.js')
const port = 8080;  // puerto   8080    

const Server = app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${Server.address().port}`);  // imprime en consola el puerto en el que esta corriendo el servidor

});
app.get("/productos", (req, res) => {
    container.getAll().then(resp=>res.send(resp))
  });
  
  app.get("/productoRandom", (req, res)=>{
    container.getAll().then(resp=>res.send(
      resp[Math.floor(Math.random()*resp.length)]
    ))
  })
  


Server.on("error", error => { console.log(error); });