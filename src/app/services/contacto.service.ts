import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NuevoContacto } from '../models/nuevo-contacto';
import { ActualizaContacto } from '../models/actualiza-contacto';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  end = 'http://ec2-3-136-108-109.us-east-2.compute.amazonaws.com:8080/contactos'
  
  constructor(private http: HttpClient) {}

listaContactos(): Observable<any> {
  return this.http.get<any>(this.end);
}

agregaContacto(contacto: NuevoContacto): Observable<any> {
  const headers = new HttpHeaders().set('Content-Type', 'application/json')
  const options = { headers: headers };
  return this.http.post(this.end, contacto, options);
}

actualizaContacto(contacto: ActualizaContacto): Observable<any> {
 const headers = new HttpHeaders().set('Content-Type', 'application/json')
 const options = { headers: headers };
 return this.http.post(this.end, contacto, options);
}

eliminarContacto(id: number): Observable<any> {
  return this.http.delete(this.end+'/'+id);
}

obtieneContacto(id: number): Observable<any>{
  return this.http.get(this.end+'/'+id);
}

}
