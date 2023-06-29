export class ListaContacto {
    id: number;
    amaterno: string;
    apaterno: string;
    edad: number;
    email: string;
    nombre: string;
    telefono: string;

    constructor(id: number, amaterno: string, apaterno: string, edad: number, email: string, nombre: string, telefono: string) {
        this.id = id;
        this.amaterno = amaterno;
        this.apaterno = apaterno;
        this.edad = edad;
        this.email = email;
        this.nombre = nombre;
        this.telefono = telefono;
      } 
}
