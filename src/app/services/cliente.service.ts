import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  _url = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient ) {}

  getClientes(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(`${this._url}/clientes`, {
      headers: header
    });
  }

  getClientesPre(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(`${this._url}/clientes-pre`, {
      headers: header
    });
  }

  crear(cliente: Client) {
    return this.http.post(`${this._url}/clientes`, cliente);
  }

  actualizar(cliente: Client) {
    return this.http.put(`${this._url}/clientes/${cliente.id}`, cliente);
  }

}
