

//export const storage = {  // ! 1 manera
const storage = {
    set: (key, value) => {
        if ( typeof value === 'string') {
            window.localStorage.setItem(key, value)
            return // break
        } 
        window.localStorage.setItem(key, JSON.stringify(value))
    },
    get(key) {
        console.log(key)
        const value = localStorage.getItem(key) // Siempre el localStorage -> me devuelve una cadena...
        console.log(value)
        // Controlar si value es una cadena
        if ( typeof value === 'string' ) { /* No me sirve controlar si valor es una cadena -> siempre va a ser una cadena */
            return value
        }
        return JSON.parse(value) 
            
    },
    getManejoError: (key) => {
        
        const value = localStorage.getItem(key)

        try {
            return JSON.parse(value)
        } catch (error) {
            //console.error(error)
            console.log('No pude hacer el parse ---> devuelve el valor por que es una cadena')
            return value
        }

    },
    remove: (key) => {
        localStorage.removeItem(key)
    },
    clear: function() {
        localStorage.clear()
    }
}

//export const PI = 3.1415 // ! 1 manera
const PI = 3.1415 // PI, no lo exporto por lo cual queda privado dentro de este arcchivo

//export { storage } // todas las que quiera. // ! 2 manera (Hago público lo que quiero utilizar en otro archivo)

export default storage // Funcionalidad principal, solo puedo tener una.

//     ⬇️ func pri | ⬇️ ⬇️ func extra

// ! Forma de incoporar (usar) el módulo en otros archivos
//import storage, {PI} from 'storage'

// ! Ejemplo de como estaría exportado REACT
/* 
const React = {}

//export const useState = () => {}
const useState = () => {}
// export const useEffect = () => {}
const useEffect = () => {}

export { useState, useEffect }
export default React

import React, {useState, useEffect} from 'react' */