import './style.css'

// ES6 
// let / const | ! var NO

let nombre = 'Maxi' // creación + declaración
console.log(nombre);
nombre = 'Luis' // redefinición
console.log(typeof nombre) // string | cadena
console.log(nombre);

let apellido // creación
console.log(apellido) // undefined
console.log(typeof apellido) // undefined

if ( typeof apellido === 'undefined') {
    console.log('Siiii')
}

// ! Primitivos

console.warn('// ! cadena')

let cadena = 'Hola soy una cadena de texto (string)'
console.log(cadena)
console.log(typeof cadena)

console.warn('// ! numero (numeros enteros / números decimales)')

let precio = 22.3
console.log(precio)
console.log(typeof precio)

let edad = 22
console.log(edad)
console.log(typeof edad)

console.warn('// ! booleanos (verdadero/falso)')

let esProfe = true
console.log(esProfe)
console.log(typeof esProfe)
// esProfe = 'Cadena'
// console.log(esProfe)
// console.log(typeof esProfe)

console.warn('// ! undefined')

let noDefinido
console.log(noDefinido)
console.log(typeof noDefinido)

console.warn('¿Qué diferencia let de const?')

let dataLet 
console.log(dataLet)
const dataConst = 'Un valor dentro de const'
console.log(dataConst)
//dataConst = 'Otra cosa' // ! No puedo redefinir una constante

const PI = 3.1415
console.log(PI)

console.warn('// ! Posibilidades con JS en la actualidad')

// https://ecma-international.org/
// https://pixijs.com/
// https://johnny-five.io/#arduino
// https://www.typescriptlang.org/
// https://nestjs.com/
// https://nodejs.org/es
// https://www.electronjs.org/
// https://reactnative.dev/
// https://nuxt.com/
// https://nextjs.org/
// https://angular.dev/
// https://vuejs.org/
// https://es.react.dev/

console.warn('// ! CONSTRUCTORES')

/* 
constructor     | var    |   let     |   const
alcance (scope) | global |   local   |   local
redeclarable    | si     |   no      |   no
redefinible     | si     |   si      |   no
*/

// ! NO USAR VAR 
let global = 'GLOBAL'
console.log(global)
if (true) {
    let primerNombre = 'Maxi'
    console.log(global)
    console.log(primerNombre)
    if ( true ) {
        let segundoNombre = 'Luis'
        console.log(segundoNombre)
        console.log(global)
        console.log(primerNombre)
    }
}

console.log(global)
//console.log(primerNombre)
//console.log(segundoNombre)

console.warn("// ! Tipos de datos objeto")

console.warn("Objetos literales");
// Los tipo de dato objeto son -> Objetos, Arrays, Funciones
// Cuando trabajo con tipos de datos objetos puedo usar const
// * Siempre const a menos que tenga que cambiar el contenido de la variable

const objetoLiteral = {
    /* clave: valor */
    /* key: value */
    nombre: 'Maxi', /* string */
    apellido: 'Principe', /* string */
    isTeacher: true, /* boolean */
    direccion: { 
        nombre: 'Calle falsa',
        altura: 745
    }, /* object (objeto) */
    coloresFavoritos: [ 
        {
            id: 1, 
            nombre: 'rosa'
        }, 
        {
            id: 2,
            nombre: 'negro'
        }
    ], /* object (array) */
    saludar: function() {
        console.log(`Hola soy ${this.nombre} y mi apellido es ${this.apellido}`)
    } /* object (función) */
}

console.log(objetoLiteral)
console.log(typeof objetoLiteral)

// ! Acceso a los valores de la claves
console.log(objetoLiteral.nombre) // notación punto (dot notation)
const clave = 'nombre'
console.log(objetoLiteral[clave]) // notación corchete (bracket notation)

// ! Modificar valor de las claves objeto literal

objetoLiteral.nombre = 'Maximiliano'
console.log(objetoLiteral)
objetoLiteral.edad = 22 /* number */

// ! No puedo hacer lo que hacía con let.
/* objetoLiteral = 'Una cadena'
console.log(objetoLiteral)
console.log(typeof objetoLiteral) */

console.warn('// ! acceder a los atributos (claves) del objeto literal')

console.log(objetoLiteral.isTeacher)
console.log(objetoLiteral.direccion.altura);
console.log(objetoLiteral.coloresFavoritos)
console.log(objetoLiteral.coloresFavoritos[0].nombre)
objetoLiteral.saludar()