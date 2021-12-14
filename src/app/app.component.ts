import { Component } from '@angular/core';

import { Client } from './models/client';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedClient: Client = new Client();
  public clientArray: Client[] = [];
  client: Client = new Client();

  constructor(private ClienteService: ClienteService) {
    this.ClienteService.getClientes()
      .subscribe((resp: any)=>{
        // console.log(resp)
        this.clientArray = resp;
      })
  }

  ngOnInit() {}

  preOrden(){
    this.ClienteService.getClientesPre()
    .subscribe((resp: any)=>{
      console.log('Llelgo el nostror');
      this.clientArray = resp;
    })
  }

  inOrden(){
    this.ClienteService.getClientes()
    .subscribe((resp: any)=>{
      // console.log(resp)
      this.clientArray = resp;
    })
  }

  // clientArray: Client[] = [
  //   { id: 1, name: 'Luigi', description: 'Development', status: 'Graduado' },
  //   { id: 2, name: 'Mariana', description: 'Piloto de Avion', status: 'Por estudiar' },
  //   { id: 2, name: 'Samuel', description: 'Futbolista', status: 'Por iniciar' }
  // ];


  edit(client: Client) {
    if( this.selectedClient.id !== 0 ) {
      this.ClienteService.actualizar(this.selectedClient).subscribe(data => {
        console.log(this.selectedClient);
      });
    }
    this.selectedClient = client;
  }

  guardar(){
    if( this.selectedClient.id === 0 ) {
      this.ClienteService.crear(this.selectedClient).subscribe(data => {
        console.log(this.selectedClient);
      });
    } else {
      if( this.selectedClient.id !== 0 ) {
        this.ClienteService.actualizar(this.selectedClient).subscribe(data => {
          console.log(this.selectedClient);
        });
      }
    }
    this.preOrden();
    this.selectedClient = new Client();
  }

  nuevo(){
    this.selectedClient = new Client();
  }

  eliminar(){
    if( confirm('Esta seguro de Eliminar el registro') ) {
      this.clientArray = this.clientArray.filter(x => x !== this.selectedClient);
      this.selectedClient = new Client();
    }
  }
}
