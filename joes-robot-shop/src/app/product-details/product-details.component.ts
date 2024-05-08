import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  /**Voy a hacer un @Input con un abierto y un cerrado paren, tenemos que importar esa entrada */
  @Input() product!: IProduct;
  /*product!: IProduct;*/
  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
  addToCart(product: IProduct) {}
  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0) return ['strikethrogh bold'];
    else return [];
  }
}
