export class NuevoContacto {
    amaterno: string;
    apaterno: string;
    edad: number;
    email: string;
    nombre: string;
    telefono: string;

    constructor(amaterno: string, apaterno: string, edad: number, email: string, nombre: string, telefono: string) {
        this.amaterno = amaterno;
        this.apaterno = apaterno;
        this.edad = edad;
        this.email = email;
        this.nombre = nombre;
        this.telefono = telefono;
      }
}