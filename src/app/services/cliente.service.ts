import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  _url = 'http://127.0.0.1:8000/api/clientes';

  constructor(private http: HttpClient ) {}

  getClientes(){
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
    return this.http.get(this._url, {
      headers: header
    });
  }
}
