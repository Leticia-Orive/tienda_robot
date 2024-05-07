import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent {
  /**Definir una propiedad de producto y los tipo de datos que necesito */
  /**Las propiedades de las clase  pero si lo quiero hacer privado tendria que poner private delante*/
  product: IProduct;

  /**Creacción del constructor para la clase */
  constructor() {
    /*Iniciar la propiedad del nuevo producto y lo configure en un nuevo objeto que se vea asi*/
    this.product = {
      id: 2,
      description:
        'A friendly robot head with two eyes and a smile -- great for domestic use.',
      name: 'Friendly Bot',
      imageName: 'head-friendy.png',
      category: 'Heads',
      price: 945.0,
      discount: 0.2,
    };
  }
  /**Agrego la funcion, incluyo el parametro del producto que es de tipo IProduct y luego devuelvo la expresión de la url adjunta*/
  getImageUrl(product: IProduct) {
    if (!product) return '';
    return '/assets/images/robot-parts/' + product.imageName;
  }
}
