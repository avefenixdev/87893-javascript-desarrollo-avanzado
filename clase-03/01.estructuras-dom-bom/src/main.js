import './style.css'

console.log('------------------------------------------------------')

let clientes = [
  { id: 1, nombre: 'Ana', edad: 22, activo: true },
  { id: 2, nombre: 'Sabrina', edad: 30, activo: true },
  { id: 3, nombre: 'Andres', edad: 17, activo: false },
  { id: 4, nombre: 'Levi', edad: 28, activo: false }
]

console.warn('Métodos find() - findIndex()')

console.log('Método find()')
// Devuelve el primer elemento que coincide con la condición

console.log(clientes)

/* const clienteId3 = clientes.find(c => {
    //console.log(c)
    if ( c.id === 4 ) {
        return c
    }
}) */

const clienteId3 = clientes.find(c => c.id === 3)

console.log(clienteId3)

console.log('-------------------------------')
// Buscar con find() al cliente Levi -> Si no lo encuentra nos devuevle undefined

/* const clienteLevi = clientes.find(c => {
  return c.nombre === 'Levi'
}) */
const clienteLevi = clientes.find(c => c.nombre === 'Levi')

console.log(clienteLevi);

console.log('-------------------------------')

console.log('Método findIndex()')
// Devuelve la posición dentro del array (indice) del primer elemento encontrado
const indice = clientes.findIndex(cli => cli.nombre === 'Andres')

console.log(indice) // la posición dentro del array en donde se encuentra Andres

console.log('-------------------------------')

clientes = [
  { id: 1, nombre: 'Ana', edad: 22, activo: true },
  { id: 2, nombre: 'Sabrina', edad: 30, activo: true }, // 1
  { id: 3, nombre: 'Andres', edad: 17, activo: false },
  { id: 4, nombre: 'Levi', edad: 28, activo: false }
]

console.log('Método splice()')
// borra el elemento con el índice 1
// splice(arg1, arg2)
// arg1 -> Es donde empezar a eliminar -> desde la posición 1
// arg2 -> Cuantos elementos eliminar -> borra 3 elementos
const datosBorrados = clientes.splice(1, 3) // Un array de elementos eliminados
console.log({datosBorrados})

console.log({clientes}) // se eliminaron 3 elementos y solo me queda 1

clientes.push(datosBorrados[0]) // id: 2
clientes.push(datosBorrados[1]) // id: 3
clientes.push(datosBorrados[2]) // id: 4

console.log(clientes)

const leviIdx = clientes.findIndex(cli => cli.nombre === 'Levi')
console.log(leviIdx)

const leviEliminado = clientes.splice(leviIdx, 1) // arg1 ->donde empieza | arg2 -> cuantos elementos
console.log(leviEliminado);
console.log(clientes)
console.log(clientes.length); // 3

// Agregamos un nuevo cliente al array en la posición 1
// arg1 -> donde empieza -> 1
// arg2 -> cuantos elementos -> 0
// arg3 -> elementos que quiero agregar
// return -> un array con elementos eliminados
const elementosEliminados = clientes.splice(1, 0, {id: 5, nombre: 'Laura', edad: 27, activo: true})
console.log(elementosEliminados) // []
console.log(clientes)

const cliente6 = { id: 6, nombre: 'Silvina', edad:44, activo: false}
const cliente7 = { id: 7, nombre: 'Debora', edad:22, activo: true}

clientes.splice(2, 0, cliente6, cliente7)
console.log(clientes)

// estoy editando el usuario con el id: 3
// pos 2
//                       0                          1                         2
// usuarios = [{ id: 1, nombre: 'Luis'}, { id: 2, nombre: 'Juan'}, { id: 3, nombre: 'Max'}]
// usuarioEditado = { id: 3, nombre: 'Maximiliano' }
// usuarios.splice(2, 1, usuarioEditado)
// usuarios = [{ id: 1, nombre: 'Luis'}, { id: 2, nombre: 'Juan'}, { id: 3, nombre: 'Maximiliano' }]

console.log('------------------------------')

console.warn('Método some()')
// Pregunta si al menos uno cumple con la condición

// Averiguar si hay alguno usuario menor de edad
const hayMenores = clientes.some(cli => cli.edad < 18)
console.log(hayMenores) // true o false -> true

// Averiguar si alguno de los clientes está desactivo
const hayActivos = clientes.some(cli => {
  if (cli.activo)  { // { id: 1, nombre: 'Ana', edad: 22, activo: true },
    return true
  }
})
console.log(hayActivos) // si -> true

const hayDesactivos = clientes.some(cli => {
  // if (!cli.activo)  { // { id: 6, nombre: 'Silvina', edad:44, activo: false}
  //   return true
  // }
  return !cli.activo
})

console.log(hayDesactivos) // ¿Hay desactivos? -> si

console.log('------------------------------')

console.warn('Método every()')
// Si todos cumplen con la condicion

