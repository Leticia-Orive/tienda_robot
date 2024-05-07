# tienda_robot
Angular paso a paso
Instalamos node 
nvm install 18.10.0
Comando para usar la version de node instalada
nvm use 18.10.0
Instalamos angular la version 16.0.0
npm install -g @angular/cli@16.0.0
Creacion de una nueva Aplicacion de Angular
ng new (nombre del proyecto como le queramos llamar)
    La primera pregunta que nos hace es queremos añadir enrutamientos a nuestro proyecto. En la mayoria de las aplicaciones, es probable que se desee icluir el enrutamiento, pero yo le he dicho que no esto para que vea como se agrega.
 luego css
Arrancar la app para que se pueda ver
npm start a la pregunta he marcado que no
Creamos nuestro primer componente
ng generate component home
Si por un casual la carpeta la queremos dentro de otra carpeta seria  ng generate component my-folder/home