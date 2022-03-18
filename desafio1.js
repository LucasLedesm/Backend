class Usuario {
    constructor(nombre, apellido, libros=[], mascotas=[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return ( this.nombre + this.apellido) ;
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addLibro(laCasa) {
        this.libros.push(laCasa);
    }
    getBookNames() {
        return this.libros.map(libro => libro.nombre);
    }
}

const usuario1 = new Usuario(
    "marcelo",
    "romero",
    [{
        nombre: "el señor de los anillos 1",
        autor: "j.r.r Tolkien",
    }]
    [{
        nombre: "el señor de los anillos 2",
        autor: "j.r.r Tolkien",
    }],["gato", "perro", "pajaro"]);
    

console.log(usuario1.countMascotas());
usuario1.addMascota("conejo");
usuario1.addLibro({nombre:"ben10", autor: "cartoon network"});
console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());