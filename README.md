# tienda_robot
0.Angular paso a paso
1.Instalamos node 
    nvm install 18.10.0
    1.1.Comando para usar la version de node instalada
        nvm use 18.10.0
2.Instalamos angular la version 16.0.0
    npm install -g @angular/cli@16.0.0
3.Creacion de una nueva Aplicacion de Angular
    ng new (nombre del proyecto como le queramos llamar)
        La primera pregunta que nos hace es queremos añadir enrutamientos a nuestro proyecto. En la mayoria de las aplicaciones, es probable que se desee icluir el enrutamiento, pero yo le he dicho que no esto para que vea como se agrega.
        luego css
4.Arrancar la app para que se pueda ver
    npm start a la pregunta he marcado que no
5.Creamos nuestro primer componente
    ng generate component home
    Si por un casual la carpeta la queremos dentro de otra carpeta seria  ng generate component my-folder/home