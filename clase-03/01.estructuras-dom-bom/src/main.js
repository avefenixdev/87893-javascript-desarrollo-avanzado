import './style.css'

console.log('------------------------------------------------------')

const clientes = [
    { id: 1, nombre: 'Ana', edad: 22, activo: true},
    { id: 2, nombre: 'Sabrina', edad: 30, activo: true},
    { id: 3, nombre: 'Andres', edad: 17, activo: false},
    { id: 4, nombre: 'Levi', edad: 28, activo: false},
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
