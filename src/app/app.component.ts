import { Component } from '@angular/core';
import { ContactoService } from './services/contacto.service';
import { NuevoContacto } from './models/nuevo-contacto';
import { ActualizaContacto } from './models/actualiza-contacto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactos';
  contactos: any
  nuevoContacto: NuevoContacto = new NuevoContacto('','',0,'','','')
  contactoActualizado: ActualizaContacto = new ActualizaContacto(0,'','',0,'','','')
  contactoact:any

  constructor(private contactosService: ContactoService) {}


  ngOnInit(): void {
    this.contactosService.listaContactos().subscribe(response => {
      this.contactos = response
    });
  }

  listarContactos(): void {
    this.contactosService.listaContactos().subscribe(response => {
      this.contactos = response
    });
  }

  eliminarContacto(id: number): void {
    this.contactosService.eliminarContacto(id).subscribe(response => {
      this.listarContactos()
    });
  }

  obtenerContacto(id: number): void {
    this.contactosService.obtieneContacto(id).subscribe(response => {
    });
  }

  guardaContacto(): void {
   if (this.validarObjeto(this.nuevoContacto)) {
    this.contactosService.agregaContacto(this.nuevoContacto).subscribe(response => {
      this.listarContactos()
    });
   } else {
    alert("Favor de llenar todos los campos")
   }
  }

  modificaContacto(): void {
    if (this.validarObjeto(this.contactoActualizado)) {
      this.contactosService.actualizaContacto(this.contactoActualizado).subscribe(response => {
        this.contactoActualizado.id = 0 
        this.contactoActualizado.nombre = '' 
        this.contactoActualizado.amaterno = ''  
        this.contactoActualizado.apaterno = ''  
        this.contactoActualizado.edad = 0  
        this.contactoActualizado.email = ''  
        this.contactoActualizado.telefono = '' 
        this.listarContactos()
      });
     } else {
      alert("Favor de llenar todos los campos")
     }


  }

  seleccionaContacto(id :number, nombre: string, amaterno: string, apaterno: string, edad: number, email: string, telefono: string): void {
    this.contactoActualizado.id = id 
    this.contactoActualizado.nombre = nombre 
    this.contactoActualizado.amaterno = amaterno 
    this.contactoActualizado.apaterno = apaterno 
    this.contactoActualizado.edad = edad 
    this.contactoActualizado.email = email 
    this.contactoActualizado.telefono = telefono
  }

  validaCaracteres(event: any) {
    const input = event.target;
    const value = input.value;
    let expreg: RegExp;

    switch (input.id) {
      case 'nombre':
      case 'apellidoPaterno':
      case 'apellidoMaterno':
        expreg = /^[a-zA-Z0-9\s]*$/;
        break;
      case 'edad':
        expreg = /^[0-9]*$/;
        break;
      case 'email':
        expreg = /^[a-zA-Z0-9@._-]*$/;
        break;
      case 'telefono':
        expreg = /^[0-9]*$/;
        break;
      default:
        expreg = /^[a-zA-Z0-9]*$/;
        break;
    }

    const cadenaModificada = value.split('').filter((char: string) => expreg.test(char));
    const cadenaLimpia = cadenaModificada.join('');

    input.value = cadenaLimpia;

  }

  validarObjeto(obj: any): boolean {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
  
        if (value === null || value === undefined || value === '') {
          return false;
        }
  
        if (typeof value === 'number' && value === 0) {
          return false;
        }
      }
    }
    return true;
  }

  }
