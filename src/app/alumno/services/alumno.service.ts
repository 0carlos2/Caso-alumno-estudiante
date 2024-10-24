import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private ApiURl = "http://localhost:8080/alumnos";
 
  constructor (private htpp: HttpClient ){}

  getAlumnos(): Observable<Alumno[]> {
    return this.htpp.get<Alumno[]>(this.ApiURl);
  }
  
}
