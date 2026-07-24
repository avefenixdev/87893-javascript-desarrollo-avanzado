import './style.css'

/* -------------------------------------------- */
console.warn('/* Comunicación asincrónica con AJAX */')
/* -------------------------------------------- */

/* --------------------------------------------------- */
/* Comunicación asincrónica con AJAX                   */
/* AJAX: Asyncronous JavaScript and XML                */
/* Un objeto llama XMLHttpRequest (Con eso trabajamos) */
/* --------------------------------------------------- */

// ----> 

// ! XML (Archivo de texto plano)
// * Nos permite transmitir información de manera estandar y liviana del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/Extensible_Markup_Language

// ! JSON (Archivo de texto plano)
// * JavaScript Object Notation
// * Nos permite transmitir información de manera estandar y liviano del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/JSON

// ! PROTOCOLO HTTP

// https://eudriscabrera.com/blog/2022/http-y-arquitectura-web

// ! Métodos (verbos) HTTP

// Servicio o Servidor API REST
// Además de los métodos disponibles en los formularios (GET y POST)
// ABM (acronimo) -> ALTA, BAJA, MODIFICACIÓN
// CRUD (acronimo) -> C:CREATE | R:READ | U:UPDATE | D:DELETE
// M.HTTP ->          POST     | GET    | PUT (PATCH) | DELETE

// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg

// ! Status HTTP
// Es la respuesta que nos va a entregar el backend. El resultado de la comunicación.

// * Respuesta informativas (100-199)
// * Respuesta satisfactorias (200-299)
// * Redirecciones (300-399)
// * Errores de clientes (400-499)
// * y errores de los servidores (500-599)

// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://http.cat/
// https://httpstatusdogs.com/
// https://www.youtube.com/shorts/TtYLv8COtJk

// ! Headers HTTP
// Dentro del protocolo HTTP los archivos va a tener una cabecera de petición y una cabecera de respuesta

// https://developer.mozilla.org/es/docs/Web/HTTP/Headers

// API Productos (Va a tener endpoints -> points -> recursos -> rutas)

// GET ALL -> CRUD -> R:READ -> http://localhost:8080/productos -> obtengo todos los productos
// GET ONE -> CRUD -> R:READ -> http://localhost:8080/productos/id -> obtengo uno solo
// POST -> CRUD -> C:CREATE -> http://localhost:8080/productos + el nuevo producto
// PUT -> CRUD -> U:UPDATE -> http://localhost:8080/productos/id + el producto editado
// DELETE -> CRUD -> D:DELETE -> http://localhost:8080/productos/id

// Clientes para probar API Rest

// Postman -> https://www.postman.com/
// Bruno -> https://www.usebruno.com/
// Insomnia -> https://insomnia.rest/
// Thunder Client -> rangav.vscode-thunder-client

// ! Peticiones asincronicas tengo 3 maneras
// 
// * XMLHttpRequest 
//     -> trabajo con callback [https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest]
// * AXIOS 
//     -> Aprovecho las promesas para evitar usar XMLHttpRequest con callback. Axios es una librería externa. Librería independendiente (https://axios.rest/)
// * fetch() 
//     -> trabaja con promesas nativamente (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

// Vamos a obtener todos los posts

const url = 'https://jsonplaceholder.typicode.com/posts'

const obtenerTodosLosPosts = () => {
    
    let data = null
    
    fetch(url)
        .then(res => {
            //console.log(res)
            console.log(data)
            return res.json()
        })
        .then(data => {
            console.log(data)

            data.forEach(element => {
                console.log(element)

                const parrafo = document.createElement('p')

                parrafo.textContent = element.title

                document.body.appendChild(parrafo)


            });
        })
        .catch((err) => {
            console.log(err)
        })

    //console.log(data) // ! NO EXISTE
       /*  data.forEach(d => {
            console.log(d)
        }) */
    
    
}

// obtenerTodosLosPosts()

const obtenerTodosLosPostsAsync = async () => {

    // (async await) es una manera moderna para gestionar las promesas -> Es una azucar sintactica
    // delante de los parentesis de la función coloco la palabra async esto hace que la función pase de ser una función sincrónica a una función asincrónica.
    // Necesito tener alguna estructura que me permita capturar el error cuando ocura en el async / await

    try {
        const res = await fetch(url)
        console.log(res)

        const posts = await res.json()
        console.log(posts)
    } catch (error) {
        console.error(error)
    }  
    
}

obtenerTodosLosPostsAsync()
