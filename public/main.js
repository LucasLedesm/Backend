let socket = io.connect();
socket.on('messages', function (data) {
  console.log(data);
  render(data);
});

let socketProducto = io.connect();
socketProducto.on('producto', function (data) {
  console.log(data);
  renderProducto(data);
});

function renderProducto(data) {
  let html = data.map((e) => {
    return `
    <tbody>
      <tr>
        <td>${e.nombre}</td>
      </tr>
      <tr>
        <td>${e.precio}</td>
      </tr>
      <tr>
        <td>${e.url}</td>
      </tr>
    </tbody>`
  }).join('');
  document.getElementById('productos').innerHTML = html;
}

function render(data) {
  let html = data.map(function (elem, index) {
    return (`<div >
            <strong>${elem.author}</strong>: 
            <em>${elem.text}</em> </div>`)
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
}
function addProducto() {
  let producto = {
    nombre: document.getElementById('nombre').value,
    precio: document.getElementById('precio').value,
    url: document.getElementById('url').value,
  };
  console.log(producto);
    socketProducto.emit("new-producto", producto);
  document.getElementById('nombre').value = ''
  document.getElementById('precio').value = ''
  document.getElementById('url').value = ''

  return false;
}


function addMessage() {
  let mensaje = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };
  socket.emit('new-message', mensaje); // new-message es el nombre del evento (recordatorio)

  document.getElementById('texto').value = ''
  document.getElementById('texto').focus()

  return false;
}   