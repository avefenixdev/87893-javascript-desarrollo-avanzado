import './style.css'
import './modulos/saludar.js'
import './modulos/persistencia.js'
import storage from './utils/storage.js'

console.log(storage)

const valor = storage.get('primerNombre')
console.log(valor) // 'maximiliano'

storage.set('fruta', 'naranja')

const otroValor = storage.get('fruta')
console.log(otroValor)

const valorConError = storage.getManejoError('fruta')
console.log(valorConError)

const objeto = storage.getManejoError('objeto')
console.log(objeto)

// ! Ejercicio de repaso.
// Crear una aplicación que permita administrar una lista de nombres utilizando localStorage.

// La página debe tener:

// Nombre: [Maxi  ] [Agregar]
// 1. Presiono el botón Agregar
// 2. Leer el input (name:value) y tomar el valor
// 3. Agregar el nombre dentro de un array
// 4. Guardo dentro del localStorage ese array
// -------------------------------------------
// 0. set de un array vacío dentro del localStorage
// 1. Quieren agregar otro nombre
// 2. Presionar el botón (evento de submit)
// 3. Leo el valor del input
// 4. Leer el array que está dentro del localStorage
// 5. Agregar el nombre dentro de un array
// 6. Guardo dentro del localStorage ese array
// --------------------------------------------



