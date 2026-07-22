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
      if ( fue ) {
        res('Fui al cumple -> Cumplí la promesa')
      } else {
        rej('No se cumplió -> No cumplí mi promesa')
      }
    })
    console.log(miPromesa)
}

//fueAlCumple() // No fui al cumple -> rejected
fueAlCumple(true) // Fui al cumple -> fulfilled