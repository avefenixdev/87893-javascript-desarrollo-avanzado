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