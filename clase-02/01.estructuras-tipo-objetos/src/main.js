import './style.css'

const producto = {
  id: "PRD-1001",
  sku: "NB-001-BLK-42",
  nombre: "Zapatillas Running Pro",
  descripcion: "Zapatillas deportivas para entrenamiento y competición.",
  categoria: {
    id: 10,
    nombre: "Calzado",
    padre: {
      id: 1,
      nombre: "Deportes"
    }
  },
  marca: {
    id: 5,
    nombre: "SportMax",
    paisOrigen: "Argentina"
  },
  precio: {
    lista: 129999,
    oferta: 99999,
    moneda: "ARS",
    impuestos: {
      iva: 21,
      incluido: true
    }
  },
  stock: {
    disponible: 42,
    reservado: 8,
    deposito: {
      id: "DEP-01",
      nombre: "Depósito Central"
    }
  },
  imagenes: [
    {
      id: 1,
      url: "/images/products/zapatilla-frente.jpg",
      principal: true
    },
    {
      id: 2,
      url: "/images/products/zapatilla-lateral.jpg",
      principal: false
    },
    {
      id: 3,
      url: "/images/products/zapatilla-suela.jpg",
      principal: false
    }
  ],
  variantes: [
    {
      color: "Negro",
      codigoColor: "#000000",
      talles: [
        {
          talle: 40,
          stock: 5
        },
        {
          talle: 41,
          stock: 8
        },
        {
          talle: 42,
          stock: 10
        }
      ]
    },
    {
      color: "Azul",
      codigoColor: "#1E3A8A",
      talles: [
        {
          talle: 41,
          stock: 3
        },
        {
          talle: 42,
          stock: 6
        }
      ]
    }
  ],
  atributos: {
    material: "Mesh",
    peso: "280g",
    genero: "Unisex",
    impermeable: false
  },
  especificaciones: [
    {
      grupo: "Dimensiones",
      propiedades: [
        {
          nombre: "Alto",
          valor: "12 cm"
        },
        {
          nombre: "Ancho",
          valor: "20 cm"
        }
      ]
    },
    {
      grupo: "Materiales",
      propiedades: [
        {
          nombre: "Exterior",
          valor: "Textil"
        },
        {
          nombre: "Suela",
          valor: "Goma"
        }
      ]
    }
  ],
  opiniones: [
    {
      id: 1,
      usuario: {
        id: 100,
        nombre: "Juan Pérez"
      },
      puntuacion: 5,
      comentario: "Excelente calidad.",
      fecha: "2026-07-10"
    },
    {
      id: 2,
      usuario: {
        id: 101,
        nombre: "Ana Gómez"
      },
      puntuacion: 4,
      comentario: "Muy cómodas para correr.",
      fecha: "2026-07-12"
    }
  ],
  etiquetas: [
    "running",
    "deportes",
    "oferta",
    "nuevo"
  ],
  envio: {
    gratis: true,
    tiempoEstimado: {
      minimoDias: 2,
      maximoDias: 5
    },
    opciones: [
      {
        tipo: "Estándar",
        costo: 0
      },
      {
        tipo: "Express",
        costo: 4500
      }
    ]
  },
  vendedor: {
    id: 300,
    nombre: "Sport Store",
    reputacion: {
      estrellas: 4.8,
      ventas: 15320
    },
    contacto: {
      email: "ventas@sportstore.com",
      telefono: "+54 11 1234 5678"
    }
  },
  fechaCreacion: "2026-06-15T09:30:00Z",
  activo: true
};

console.log(producto.imagenes[1].url)
console.log(producto.precio.impuestos.iva)
console.log(producto.stock.deposito.nombre)
console.log(producto.variantes[0].talles[1].talle)
console.log(producto.especificaciones[1].propiedades[1].valor)

console.warn('// ! Arrays / Arreglos / Vectores')
/* Es una estructura de datos indexada. */

const personaUno = {
    nombre: 'Lorena',
    apellido: 'Lopez'
}

const personaDos = {
    nombre: 'Adriana',
    apellido: 'Gutierrez'
}

const personaTres = {
    nombre: 'Rocio',
    apellido: 'Perez'
}

const personaCuatro = {
    nombre: 'Pablo',
    apellido: 'Diaz'
}

const personaCinco = {
    nombre: 'Diego',
    apellido: 'Hernandez'
}
//                    0     ,      1    ,     2
const personas = [personaUno, personaDos, personaTres]

console.log(personas)

console.warn('// ! Método push()')

personas.push(personaCuatro)

console.log(personas)

console.log('// ! length')
// Cantidad de elementos que tenemos dentro de la estructura

console.log(personas.length)

console.log(personas[0]) // el primer elemento siempre va a estar en la posición 0
console.log(personas[4-1]) // último elemento
console.log(personas[personas.length-1]) // último elemento
console.log(personas.at(-1)) // último elemento

console.warn('// ! ¿Cómo diferencio un array de un objeto?')

console.log(typeof producto) // object
console.log(typeof personas) // object
console.log(Array.isArray(producto)) // false
console.log(Array.isArray(personas)) // true

if (Array.isArray(personas)) {
    const elemento = e => { console.log(e) }
    personas.forEach(elemento)
} else {
    console.log('No es un array')
}

console.warn('// ! Método pop() -> Quita el último elemento del array')

console.log(personas)
const elemento = personas.pop()
console.log(personas)
console.log(elemento)

console.warn('// ! Método join() -> Convierte los elementos de un array en una cadena concatenada')

const productos = ['PC', 'Notebook', 'Celular', 'Tablet']
const cadenaProductos = productos.join('-')
console.log(cadenaProductos)

console.warn('// ! Métodos String split()')

const cadena = 'Maxi-Luis-Arturo'
const arrayCadena = cadena.split('-')
console.log(arrayCadena)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

console.warn('// ! Métodos String shift()')

const productoEliminado = productos.shift() // PC
console.log(productoEliminado)

console.warn('// ! Métodos String unshift()')

console.log(productos.length) // 3
const nuevaCantidadElementos = productos.unshift('PC Gamer')
console.log(productos)
console.log(nuevaCantidadElementos) // 4

const comidas = ['Tallarines', 'Asado', 'Helado', 'Canelones', 'Pizza', 'Ravioles', 'Milanesas', 'Torta', 'Shushi'] // 9

console.log(comidas)

console.warn('// ! Método map()')
// El map recorre el array y generar un nuevo array de la misma dimensión que el array original
// array original 9 -> nuevo array 9
const arrayComidasMasIndice = comidas.map(function(comida, indice, array) {
    console.log(comida)
    console.log(indice)
    console.log(array)

    const obj = {
        comida,
        id: indice + 1
    }

    //return comida + indice
    return obj
})

console.log(arrayComidasMasIndice)