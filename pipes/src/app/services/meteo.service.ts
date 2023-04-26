import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }


  obtenerDatos(dia: string){
    return this.http.get(`https://meteo-de-oscar.proxy.beeceptor.com/${dia}`)
  }
}
