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

// Compruebo si todos están activos
const todoActivos = clientes.every(cli => cli.activo)
console.log(todoActivos)

// Compruebo si todos son mayores de edad
const todosMayores = clientes.every(cli => {
  if ( cli.edad >= 18) {
    return true
  } else {
    return false
  }
})

console.log(todosMayores);

console.log('------------------------------')

console.warn('Método sort()') 

console.warn('// ordenar de menor a mayor')
//                                          50  -  22

//const ordenados = clientes.sort((a, b) => a.edad - b.edad) // versión copia

//const ordenados = [...clientes] // versión clonado
//ordenados.sort((a, b) => a.edad - b.edad)
const ordenados = [...clientes].sort((a, b) => a.edad - b.edad)
console.log(ordenados)
console.log(clientes)

ordenados.pop()
console.log(ordenados)
console.log(clientes)

console.warn('// ordenar de mayor a menor')

/* const ordenadosMayorAMenor = clientes.sort((a, b) => b.edad - a.edad)
console.log(ordenadosMayorAMenor) */

console.warn('-------------------------------------------------')

console.warn('DOM -> Document Object Model')

//console.log(document)
console.dir(document) // saca un radiografía.


console.warn('BOM -> Browser Object Model')

console.log(window)

console.warn('Acceso absoluto a los elementos')

console.log(window.document.children[0].children[1].children[0].children[0])

console.warn('Acceso relativo o directo a los elementos html (nodos html)')

// Métodos para acceder a los nodos html
console.warn('Métodos tradicionales')

const h1 = document.getElementsByTagName('h1') // Colección de HTMLs (HTMLCollection)
console.log(h1)

const tituloPrincipal = document.getElementById('titulo-principal') // HTMLElement
//console.log(tituloPrincipal)
console.dir(tituloPrincipal)

tituloPrincipal.textContent = 'Esto es una nuevo titulo desde JS'

// Acceder al padre del h1 -> main
//console.log(tituloPrincipal.parentElement)
console.dir(tituloPrincipal.parentElement)

// ! Modificando o agregando clases vía JS
tituloPrincipal.classList.remove('text-blue-500')
tituloPrincipal.classList.add('text-red-500', 'bg-orange-400', 'cursor-pointer', 'p-4')

// ! Modificando o agregando estilos en línea
tituloPrincipal.style.color = 'gold'
tituloPrincipal.style.border = '4px solid red'

// ! ¿Cómo bindeabamos un evento? nodo.addEventListener()

tituloPrincipal.addEventListener('click', () => {
  tituloPrincipal.classList.toggle('text-red-500')
})

console.warn('Métodos modernos')

// 1. Crear un etiqueta h2 -> con el texto hola mundo 
// 2. Crear un botón -> con el texto cambiar color -> con un id que sea btn
// 3. Selecionar la etiqueta h2 con el selector de etiquetas -> getElementsByTagName
// 4. Selecionar el botón por el ID -> getElementById
// 5. Comprobar que estén selecionados -> console.log()
// 6. Agregar un evento que haga que cambie de color el texto del subtitulo. De negro a rojo (text-red-500)
// Tiempo: 5 minutos 

const coleccionH2 = document.getElementsByTagName("h2");
console.log(coleccionH2)
const subtitulo = coleccionH2[0]

const boton = document.getElementById("btn");

console.log(subtitulo);
console.log(boton);

boton.addEventListener("click", function () {
  subtitulo.classList.toggle("text-yellow-500");
}); 

// Ejercicio integrador

// 1. Agregar en el html un div con el id contenedor
// 2. Seleccinar div por el id.
// 3. Comprobar que lo tengo bien seleccionado al div
// 4. Crear un array de string de personas  (3 personas)
// 5. Recorrer el array y mostrarlo en consola
// 6. Colocar dentro del div a las personas dentro de un p
// 6.0. Recorro el array de personas
// 6.1. Crear un p -> const parrafo = createElement('p')
// 6.2. Inyectar dentro del p a la persona. parrafo.textoContent = persona
// 6.3. Inyectar el p dentro del contenedor contenedor.appendChild(persona)

// Tiempo: 10 min + 5 min + 5 min

console.log('---------------------------------------------')
console.log('---------------------------------------------')

// Marco

/* const contenedor = document.getElementById('contenedor')
console.dir(contenedor);
const personas = ['Nicolas', 'Julieta', 'Matias']
personas.forEach(persona => {
  //console.log(element);
  const parrafo = document.createElement('p')
  parrafo.textContent = persona
  contenedor.appendChild(parrafo)
}); */

// Maximiliano

/* const contenedor = document.getElementById("contenedor")
console.log(contenedor) // div seleccionado
const personas = ['maxi', 'luis', 'laura']
personas.forEach(function(persona) {
  console.log(persona)
  const parrafo = document.createElement('p')
  parrafo.textContent = persona
  contenedor.appendChild(parrafo)
})
console.log(contenedor) // muestro el div con el contenido */


console.log('---------------------------------------------')
console.log('---------------------------------------------')


