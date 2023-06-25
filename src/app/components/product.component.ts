import { Component, Input, Output, EventEmitter } from '@angular/core';

import { product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent{

   @Input()
  product!: product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(){
      console.log('constructor');
  }

   addCart(){
      console.log('añadir al Carrito');  
      this.productClicked.emit(this.product.id); 
   }
}