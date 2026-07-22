import './style.css'

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

/* 
Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. 
*/ 

// Una promesa tiene tres estados:

// Pendiente (pending): está en proceso.
// Se cumplió (fulfilled): se resolvió exitosamente.
// No se Cumplió -> Rechazada (rejected): ocurrió un error.
// ---------------------------
// Promise(fn-ejecutar) <--- una función pasada como argumento de otra
// resolve y reject son referencias de funciones
// resolve -> Se usa cuando quiero que se cumpla la promesa (fulfilled)
// reject -> Se usa cuando quiero que no se cumpla promesa (rejected)
// ! fulfilled -> Promesa que siempre se cumple

// ! Creamos una promesa

//const promesa = new Promise(() => {})
//console.log(promesa) // pendiente

// ! Esta promesa siempre se cumple
/* const promesa = new Promise((resolve, reject) => {
  resolve('Siempre se cumple!')
})
console.log(promesa) // se cumple siempre */

// ! Esta promesa nunca se cumple
/* const promesa = new Promise((resolve, reject) => {
  reject('Nunca se cumple!')
})
console.log(promesa) // no se cumple nunca */

function fueAlCumple(fue = false) {
    console.log(fue)

    const miPromesa = new Promise((res, rej) => {

      setTimeout(() => {
        if ( fue ) {
          res('Fui al cumple -> Cumplí la promesa')
        } else {
          rej('No se cumplió -> No cumplí mi promesa')
        }
      }, 3000) // 3 seg.

    })
    console.log(miPromesa)
    return miPromesa
}

//const promesa = fueAlCumple(true) // Fui al cumple -> cumplí -> fulfilled
const promesa = fueAlCumple(false) // No fui al cumple -> no cumplí -> rejected
//console.log(promesa)

// ! Gestionar a una promesa, tenemos métodos (then, catch, finally)

// channing
promesa
  .then((dataRes) => {
    console.log(`THEN: ${dataRes}`)
  }) // THEN -> cuando la promesa se cumpla (fulfilled)
  .catch((err) => {
    console.log(`CATCH: ${err}`)
  }) // CATCH -> cuando la promesa no se cumpla (rejected)
  .finally(() => {
    console.log('FIN') // Tareas de limpieza -> detener la petición
  }) // siempre

// Ventas -> Inventario el producto que estoy queriendo vender.

function venta(hayStock) {

  const preguntaStockPromesa = new Promise((res, rej) => {

    setTimeout(() => {
      if ( hayStock ) {
        res('Hay stock y podes vender el producto porque lo tenemos')
      } else {
        rej('No hay stock de ese producto que queres vender...')
      }
    }, 5000) // 5 seg

  }) 

  console.log(preguntaStockPromesa) // Promesa-> pedding
  return preguntaStockPromesa

}

const promesaStock = venta(false)

// Gestionamos promesa

promesaStock
  .then((data) => {
    console.log(`THEN: ${data}`) // numero, cadena, boolean, array, objeto
    console.log('Bueno vendemos...')// Vendedor
  })
  .catch((error) => {
    console.log(`CATCH: ${error}`) // respuesta inventario
    console.log('Alternativa o no tenemos stock') // Vendedor
  })
  .finally(() => {
    console.log('FINALLY: FIN')
  })

//console.log('Siempre se ejecuto (antes la respuesta de la promesa)')

let dato = null

setTimeout(() => {
  dato = [1, 2, 4, 5]
  console.log(dato)
  dato.forEach(d => {
    console.log(d)
  })
}, 5000);

console.log(dato) // null

