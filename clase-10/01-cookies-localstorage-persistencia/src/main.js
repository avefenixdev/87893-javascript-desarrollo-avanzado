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

// constante (type)
const clave = {
    nombres: 'nombres'
}

const formulario = document.getElementById('formulario')
const inputNombre = document.querySelector('#nombre')
//                           evento, callback
formulario.addEventListener('submit', agregarNombre)

function agregarNombre(e) {
    e.preventDefault()
    console.dir(inputNombre)
    // 3. Leo el valor del input
    const nombre = inputNombre.value.trim() /* limpiar espacios adelante y atrás de la cadena */
    console.log(nombre)
    // 4. Leer el array que está dentro del localStorage
    // -> short circuit operator -> AND lógico -> && o el OR lógico -> ||
    // El 'o' lógico. Al menos 1 las premisas debe ser verdadera para que el resultao sea verdadero
    //   x   ||   y   = resultado
    // true  || true  = true
    // true  || false = true
    // false || true  = true
    // false || false  = false
    // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
    //                 false(null, undefined, '',               || true
    const nombres = storage.getManejoError(clave.nombres) || []
    //const nombres = JSON.parse(localStorage.getItem(clave.nombres)) || []
    console.log(nombres) //[]
    //debugger
    // 5. Agrego el nombre dentro de nombres (array)
    nombres.push(nombre)    

    // 6. Guardo el array nuevamente dentro del storage

    //localStorage.setItem('nombres', JSON.stringify(nombres))
    storage.set(clave.nombres, nombres)
    //localStorage.setItem('nombres', JSON.stringify(nombres))

    formulario.reset()

    console.log('Nombre agregado')

}
