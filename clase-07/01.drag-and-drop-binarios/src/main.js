import './style.css'

const dropArea = document.getElementById('drop-area')
const inputFile = document.querySelector('#input-file') // selectores css -> . para la clase | # para el id
// console.log(dropArea)
// console.log(inputFile)

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
        handleFile(archivo)
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
        handleFile(archivo)
    })
}

const start = () => {
    console.log('--- Todo el html está listo ---')
    agregarEventoChange(inputFile)
    agregarEventoDragDrop(dropArea)

}

document.addEventListener('DOMContentLoaded', start)