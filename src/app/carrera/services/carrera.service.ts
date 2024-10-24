import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrera } from '../models/carrera';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  private apiUrl='http://localhost:8080/carreras';
  constructor(private http: HttpClient) { }

  getCarreras():Observable<Carrera[]>{
    return this.http.get<Carrera[]>(this.apiUrl);
  }
}
