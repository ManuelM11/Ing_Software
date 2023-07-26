
Dentro de este archivo Screens se encuentran todas las vistas.

Cada vista es ruteada en App.js de una forma un tanto desordenada, pero efectiva.

Las vistas se comunican mediante el siguiente comando:

navigation.navigate('Vista', { **parametros : **valorparametros })

Donde pueden existir varios parámetros.

Los parámetros deben definirse de una forma especial en el nombre de las funciones y en el mismo cuerpo de
la siguiente manera:

export default function funcion({ route, navigation }){

    const { parametros } = route.params; // Automáticamente reconoce los parámetros si son entregados con el formato correcto.
    ...

}

Para crear una nueva vista:

Primero que nada, si quieres crear nuevos estilos, tienes la carpeta styles disponibles para evitar
volver a copiar los estilos cuando quieras reutilizarlos. Luego toca simplemente importarlos tal como se ve en cada vista.

La estructura es:

* Import cosas de react native
* Import estilos
* Variables
* Funcion

La funcion va:

export default function funcion( { route, navigation }){
    const { parametros } = route.params; // SI NO SE UTILIZA LAS VARIABLES SON UNDEFINED

}

Donde route son todos los parámetros que requieres que se intercambien entre las vistas.
En caso de no necesitarlos, simplemente usar navigation.

