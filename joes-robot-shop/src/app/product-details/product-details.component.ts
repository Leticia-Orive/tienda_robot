import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  /**Voy a hacer un @Input con un abierto y un cerrado paren, tenemos que importar esa entrada */
  @Input() product!: IProduct;
  /**Agregar una propiedad analoga llamada propiedad de salida */
  @Output() buy = new EventEmitter();
  /*product!: IProduct;*/
  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
