import { Component } from '@angular/core';

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
export class HomeComponent {}
