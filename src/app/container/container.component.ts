import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  constructor() { }
  referencia = {
    nombre: "Buso referencia",
    //imagen1: "./assets/images/DARKGEO.jpeg",
    imagen2: "./assets/images/pantalones/referencia1/1.jpg",
    imagen3: "./assets/images/pantalones/referencia1/2.jpg",
    imagen4: "./assets/images/pantalones/referencia1/3.jpg",
    imagen5: "./assets/images/pantalones/referencia1/4.jpg",
    imagen6: "./assets/images/pantalones/referencia1/5.jpg",
    imagen7: "./assets/images/pantalones/referencia1/6.jpg",
    imagen8: "./assets/images/pantalones/referencia1/7.jpg",
    imagen9: "./assets/images/pantalones/referencia1/8.jpg",
    imagen10:"./assets/images/pantalones/referencia1/9.jpg",
    descripcion: "aqui va la descripcion"
  }
}
