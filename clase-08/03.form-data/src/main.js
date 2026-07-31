import './style.css'

// Cuando trabajo con querySelector, los selectores son css.
// clase -> #
// id -> .
// etiqueta -> nombre etiqueta
const formulario = document.querySelector('#formulario')

console.log(formulario)

formulario.addEventListener('submit', async e => {
    e.preventDefault() // Detiene el comportamiento por defecto del submit html -> hacer la petición
    console.log('Se ejecutó el submit!')

    const datos = new FormData(formulario)
    console.log(datos)

    // ! Me devuelven interadores (clave/valor)
    //console.log(datos.entries().next()) // 
    console.log(datos.values())
    // ! Todos los valores de una clave
    console.log(datos.getAll('nombre')) 
    console.log(datos.getAll('email'))
    // ! Solo obtiene el primero
    console.log(datos.get('nombre')) 
    // ! Borrar dado la clave el valor
    //datos.delete('nombre')
    //console.log(datos.get('nombre')) // null
    // ! append() <-- agrega un nuevo campo (clave/valor)
   /*  datos.append('dato_secreto', '123456')
    console.log(datos.get('dato_secreto')) */
    console.warn('// ! formEach() -> Recorre y accede a los valores dentro del formData')
    datos.forEach( dato => {
        console.log(dato)
    })
    console.warn('for of <- me devuelve clave/valor')
    // Validar campos obligatorios
    for (const [key, value] of datos) {
        if(!value.toString().trim()) { 
            console.warn(`El campo ${key} es obligatorio.`)
        }
    }
    /* for (const dato of datos) {
        console.log(dato) //<-- array 2 posiciones [key, value]
    } */

    console.warn('Validaciones especificas')

    const nombre = datos.get('nombre') // ' Maxi '

    const errores = []

    if (!nombre.trim()) { //'Maxi'
        errores.push('El nombre es obligatorio')
    }

    const email = datos.get('email')

    if (!email.trim()) {
        errores.push('El correo es obligatorio')
    }
    
    const smallErrores = document.querySelector('#errores')

    if ( errores.length > 0 ) { // Si hay errores
        //console.log(errores)
        smallErrores.innerHTML = ''
        const ul = document.createElement('ul')

        errores.forEach(error => {
            const li = document.createElement('li')
            li.textContent = error
            ul.appendChild(li) // ul>li    
        })
        
        smallErrores.appendChild(ul)
        return // break <--- en este punto se detiene la ejecución de esta función
    }

    smallErrores.innerHTML = ''
    
    console.log('Formulario válido!')

    const url = 'http://localhost:8080/clientes/'

    try {
        
        const options = {
            method: 'POST',
            body: datos // no coloco las cabeceras, ni tengo que hacer el stringify
        }

        const res = await fetch(url, options)
        console.log(res)
        if (!res.ok) throw new Error('No se enviar el form')

        const data = await res.json()

        console.log(data) // id <-- json-server

    } catch (error) {
        console.warn(error)
    }


})