# tienda_robot
0. Angular paso a paso
1. Instalamos node 
    nvm install 18.10.0
    1.1. Comando para usar la version de node instalada
        nvm use 18.10.0
2. Instalamos angular la version 16.0.0
    npm install -g @angular/cli@16.0.0
3. Creacion de una nueva Aplicacion de Angular
    ng new (nombre del proyecto como le queramos llamar)
        La primera pregunta que nos hace es queremos añadir enrutamientos a nuestro proyecto. En la mayoria de las aplicaciones, es probable que se desee icluir el enrutamiento, pero yo le he dicho que no esto para que vea como se agrega.
        luego css
4. Arrancar la app para que se pueda ver
    npm start a la pregunta he marcado que no
5. Creamos nuestro primer componente
    ng generate component home
    Si por un casual la carpeta la queremos dentro de otra carpeta seria  ng generate component my-folder/home
6. Definicion del prefijo de aplicación para los componentes
    Dentro de un archivo .ts lo que va en el selector antes de lal componente home en este caso app se llama prefijo, que debe ser unico para esta aplicación.Esto evita colisones con otros nombres de componentes en de que importe y usar componentes de terceros en otras bibliotecas o incluso si está importando.
    En el angular json de mi proyecto he realizado este cambio "prefix": "bot",//* Cambio de app por bot*//
    Por lo general, solo hay tres caracteres mas o menos y asegurase de no usar el comando ng porque esta reservado por angular. 
7. Configurar angular.json para las imagenes 
    En angular.json puedes ver dentro de assets una sección de activos. Puedes ver que nuestra carpeta de activos se ha agregado a la matriz de activos.
8. Interpolación
Es el proceso de poner expresiones en nuestro HTML que Angular luego evaluará y convertirá .
    Si poner esto <h1>2+2= {{Math.round(2+2)}}</h1> te salta un error y es porque el analizador angular no puede manejar esta expresión limita intencinalmente lo que puede hacer en las exprersiones de interpolación para evitar que coloquemos mucho codigo JS en nuestro HTML.