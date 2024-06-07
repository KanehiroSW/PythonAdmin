import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  entradas = [
    { usuario: 'Quispe Acosta, Luis', correo: 'lquispeac@ucvirtual.edu.pe', fecha: '31/05/24', hora: '12:00 PM' },
  ];

  salidas = [
    { usuario: 'Perez Lopez, Ana', correo: 'aperezlopez@ucvirtual.edu.pe', fecha: '31/05/24', hora: '06:00 PM' },
  ];

  registros = this.entradas;

  constructor() {}

  mostrarEntradas() {
    this.registros = this.entradas;
  }

  mostrarSalidas() {
    this.registros = this.salidas;
  }

}
