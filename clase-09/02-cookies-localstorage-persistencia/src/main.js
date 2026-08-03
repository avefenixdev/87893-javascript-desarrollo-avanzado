import './style.css'
import Cookies from 'js-cookie'

/* 
import Cookies from 'js-cookie' // ES Modules -> ECMA SCRIPT -> https://ecma-international.org/
// or
const Cookies = require('js-cookie') // Modulos de Node -> CommonJS
*/

// ! Persistencia. 
// Es la manera de almacenar datos del lado del cliente. Autenticación personalización de la aplicación y los usuarios

// ! Cookies

console.log(document.cookie)

const cadena = document.cookie

const array = cadena.split(';')
console.log(array)

const arrayNombre = array[0].split('=')
console.log(arrayNombre)

// En vez de gestionarlo manualmente al string, utilizo una librería que me ayude
// npm i js-cookie
// https://www.npmjs.com/package/js-cookie

console.log(Cookies.get()) // Todas las cookies en forma objeto
console.log(Cookies.get('nombre')) // Me devuelve solo el valor de la key que le pida
console.log(Cookies.set('modo', 'claro')) // Crea la cookie modo.

console.log(Cookies.remove('apellido'))

console.log(Cookies.set('configuracion', true, { expires: 1}))

// cookies -> DOM -> document -> menos moderno
// localStorage -> BOM -> window -> más moderno
// sessionSotage -> BOM -> window -> más moderno

// DOM -> Document Object Model -> Represetación del Documento html en formato objeto
// BOM -> Browser Object Model -> Represetación del navegador en formato objeto

// ! LocalStorage

console.log(window.Storage)

console.warn('// ! localStorage')

// Leer el localStorage

console.log(localStorage)

// Crear un elemento dentro del storage
// Primitivos
localStorage.setItem('palabra', 'supercalifragilisticoespialidoso')
localStorage.setItem('numero', 2) // localStorage a pesar de enviarle un número, todo OK
localStorage.setItem('booleano', true) // localStorage a pesar de enviarle un booleano, todo OK
// El problema empieza cuando empezamos a tener tipo Objeto
localStorage.setItem('array', JSON.stringify([2, 3, 4])) // No me guarda correctamente el array en formato string
localStorage.setItem('objeto',  JSON.stringify({x: 1, y: 2, z: 3})) // No va a poder hacer la conversión a cadena automaticamente

// Leo los datos del storage
console.log(localStorage.getItem('nose')) // null
console.log(localStorage.getItem('palabra')) // null
console.log(Number(localStorage.getItem('numero'))) // '2'
console.log(Boolean(localStorage.getItem('booleano'))) // 'true'
console.log(JSON.parse(localStorage.getItem('numero'))) // 'true'
console.log(JSON.parse(localStorage.getItem('booleano'))) // 'true'
console.log(JSON.parse(localStorage.getItem('array'))) // "[2, 3, 4]"
console.log(JSON.parse(localStorage.getItem('objeto'))) // '{"x": 1, "y": 2, "z": 3}'



// ! SessionStorage
