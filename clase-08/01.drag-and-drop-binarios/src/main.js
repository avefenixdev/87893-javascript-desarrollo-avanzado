import './style.css'

// ! ERROR DE CORS
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS

const dropArea = document.getElementById('drop-area')
const inputFile = document.querySelector('#input-file') // selectores css -> . para la clase | # para el id
// console.log(dropArea)
// console.log(inputFile)

const handleRequestBackendLocal = async ( archivo ) => {

    try {
        const url = 'http://localhost:8080/subida-archivos'

        // API -> Facilita la gestión de formularios con JS
        // FormData() -> Un objeto de javascript que modela los elementos que tienen dentro los formularios. 
        // key/clave -> archivo 
        // value/valor -> File (archivo)
        
        // https://developer.mozilla.org/en-US/docs/Web/API/FormData
        const formData = new FormData()
        formData.append('archivo', archivo)

        const options = {
            method: 'POST',
            body: formData
        }

        const res = await fetch(url, options)

        if ( !res.ok ) {
            throw new Error('No se pudo...')
        }

        const data = await res.text() // si fuera un json -> .json()
        console.log(data)

    } catch (error) {
        console.error(error)
    }

}

const handleRequestBackendRemoto = async ( archivo ) => {

    try {
        const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        console.log(CLOUD_NAME)
        console.log(UPLOAD_PRESET)
        // https://api.cloudinary.com/v1_1/<cloud-name>/upload
        const URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`
        console.log(URL)

        const formData = new FormData()
        console.log(archivo)
        formData.append('file', archivo) // Cloudinary está esperando el name -> 'name'
        formData.append('upload_preset', UPLOAD_PRESET)

        const options = {
            method: 'POST',
            body: formData
        }

        const res = await fetch(URL, options)

        if ( !res.ok ) throw new Error('No se pudo subir la imagen')

        const data = await res.json() // Cloudinary me devuelve un json

        console.log(data)

        return data.secure_url
        
    } catch (error) {
        console.error(error)
    }

}



const handleFile = (archivo) => {
    //console.log('Recibí el archivo ---')
    //console.log(archivo)
    // Leer el archivo y mostrarlo en nuestra interfaz
    // Web Api -> FileReader()
    const reader = new FileReader()
    reader.readAsDataURL(archivo) // Lee el archivo como un URL
    //console.log(reader)
    reader.onload = () => {
        //console.log(reader.result)
        const preview = document.querySelector('#preview')
        preview.src = reader.result
        preview.classList.remove('hidden')
    }
}

// ! Eventos
const agregarEventoChange = (inputFile) => {
    //console.log('Input recibido')
    //console.log(inputFile)

    inputFile.addEventListener('change', e => {
        //console.log(e)
        // Cambio y debería tener un archivo cargado dentro
        //console.dir(e.target)
        //console.dir(inputFile)
        //console.dir(e.target.files[0])
        //console.dir(inputFile.files[0])
        const archivo = e.target.files[0]
        //console.log(archivo)
        handleFile(archivo) // previsualización
        //handleRequestBackendLocal(archivo) // petición binaria
        handleRequestBackendRemoto(archivo) // petición binaria
    })

}

const agregarEventoDragDrop = (dropArea) => {
    //console.log('---- Llegó el drop ---')
    //console.log(dropArea)
    // Cuando elemento que se estoy arrastrando está sobre la zona
    // Con el preventDefault, lo que buscamos es detener la apertura de una nueva pestaña con el recurso
    dropArea.addEventListener('dragover', e => {
        e.preventDefault()
        dropArea.classList.add('bg-red-100', 'border-red-400')
        console.log('dragover')
    })
    // Cuando elemento que se estoy arrastrando está fuera de la zona
    dropArea.addEventListener('dragleave', e => {
        e.preventDefault()
        dropArea.classList.remove('bg-red-100', 'border-red-400')
        console.log('dragleave')
    })
    // Cuando solté el elemento sobre la zona
    dropArea.addEventListener('drop', e => {
        e.preventDefault()
        dropArea.classList.remove('bg-red-100', 'border-red-400')
        console.log('drop')

        console.dir(e.dataTransfer.files[0])
        const archivo = e.dataTransfer.files[0]
        handleFile(archivo) // previsualización
        // handleRequestBackendLocal(archivo) // petición binaria
         handleRequestBackendRemoto(archivo) // petición binaria
    })
}

const start = () => {
    console.log('--- Todo el html está listo ---')
    agregarEventoChange(inputFile)
    agregarEventoDragDrop(dropArea)

}

document.addEventListener('DOMContentLoaded', start)