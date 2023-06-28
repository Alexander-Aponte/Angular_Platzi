import { Component, OnInit } from '@angular/core';

import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/1.jpg',
      title: 'Tarjeta Madre AMD',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/2.jpg',
      title: 'Tarjeta Madre Intel',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/3.jpg',
      title: 'Lapto',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/4.jpg',
      title: 'Mause',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/5.jpg',
      title: 'Mause Inalambricos',
      price: 80000,
      description: '2.4G Ratón inalámbrico Óptico 6 botones 1200DPI Ratones para computadora PC Juego portátil Ratón (batería no incluida)'
    },
    {
      id: '6',
      image: 'assets/images/6.jpg',
      title: 'Audifono',
      price: 80000,
      description: 'Los auriculares supraaurales ATH-AX1iS cuentan con controladores de 36 mm para un sonido óptimo, almohadillas generosamente acolchadas para mayor comodidad durante el uso prolongado que brinda una sensación profunda de música y un diseño plegable que permite un fácil almacenamiento mientras viaja. Los controles de pista, volumen y micrófono en línea le permiten responder/finalizar llamadas, reproducir/pausar/controlar música y videos y ajustar el volumen.'
    },
    {
      id: '7',
      image: 'assets/images/7.jpg',
      title: 'Router Wifi Wn840N',
      price: 80000,
      description: 'Ofrece una velocidad de transmisión inalámbrica de 300 Mbps, ideal tanto para tareas sensibles al ancho de banda como para trabajos básicos. Puede cifrar fácilmente la seguridad inalámbrica con solo presionar el botón WPS Determine fácilmente cuánto ancho de banda se asigna a cada PC a través del control de ancho de banda basado en IP Puede expandir su red inalámbrica a través del puente inalámbrico WDS EN EL CUADRO'
    },
    {
      id: '8',
      image: 'assets/images/8.jpg',
      title: 'Router Wifi AC750',
      price: 80000,
      description: 'Tiene 3 antenas externas que brindan una excelente cobertura de wifi y señal. Admite Wi-Fi estándar 802.11ac de última generación       Ofrece simultáneamente conexiones de 2,4 GHz 300 Mbps y 5 GHz 433 Mbps para 733 Mbps de ancho de banda total disponible       Tiene 3 antenas externas que brindan una señal omnidireccional estable y una cobertura inalámbrica superior       Este producto tiene certificación RoHS  Paquete de ventas'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
