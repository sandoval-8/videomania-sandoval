# VideomaniaSandoval

## Presentación

Proyecto ideado para coderhouse.

El proyecto consta de 4(tres) carpetas (view, components, service y modelo).

VIEW: Carpeta con elementos reutilizables.
COMPONENTS: Componentes de un solo uso.
SERVICE: Servicio de comunicacion entre componente (el nav y los componentes de la carpeta de COMPONENTS).
MODELO: Interfaces y datos de prueba.

## Rutas

localhost:4200/login  
--------->  LoginComponent (Formulario de inicio de sesion).

localhost:4200/registro  
--------->  RegistroComponent (Formulario de registro).

localhost:4200  
--------->  ListadoComponent (Funciona como 'index', muestra todas las peliculas).

localhost:4200/info

--------->  InfoComponent (Cuando compras una pelicula muestra el detalle de la compra y pelicula).

localhost:4200/carrito  
--------->  CarritoComponent (Cuando agregas la pelicula al carrito muestra el listado de peliculas en el carrito).

## Ciclos de vida

Utilizamos un servicio que comunica el NAV con el resto de los componentes, en funcion de la ruta en la que se esté el NAV se modifica para mostrar ciertas funcionalidades.

![Image text](https://github.com/sandoval-8/videomania-sandoval/blob/master/src/assets/readme/index.PNG)

![Image text](https://github.com/sandoval-8/videomania-sandoval/blob/master/src/assets/readme/login.PNG)

Ciclos de vida utilizados:
 - OnInit: Cada componente de la carpeta COMPONENTS ejecuta el OnInit para decirle al nav cual es la nueva tura actual.(Ubicado en todos los componentes).
 - OnDestroy: Se encarga de cancelar la subscripcion a eventos cuando el componente ya no se utiliza (Ubicado en los componentes Listar e Info).
