import { Component, OnInit } from '@angular/core';
/**Primero importamos la interfaz en este caso OnInit y lo colocamos en su clase*/
@Component({
  selector: 'bot-home', // Cambio app por bot porque sino me funciona porque tambien lo cambie en angular json.
  /** Poner el html y el css de otra forma distinta dentro de este archivo
   * html
   * templete:'./home.component.html',
   * templete:`<p class="red">Inline home words!</p>´
   * CSS
   * style: [`.red { color: red;}´],
   */
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  /**Aqui */
/**Creamos el constructor */
constructor(){

}
/** Creamos el metodo en la clase, en este metodo es donde se pone cualquier logica que quieras
 * Se ejecuta cuando se activa el gancho del ciclo de la vida
 */
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
} 
