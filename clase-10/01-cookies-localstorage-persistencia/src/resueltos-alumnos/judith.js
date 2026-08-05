//HTML:
{/* <body>
  <h1>Persistencia (Cookies, LocalStorage, SessionStorage)</h1>
  <form id="formulario">
    <input type="text" id="nombre" placeholder="Nombre">
    <button>Agregar</button>
     <button id="restaurar">Restaurar Lista</button>
  </form>
  <script type="module" src="/src/main.js"></script>
</body> */}

// JS:
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
// Creo un array vacío
if (localStorage.getItem("nombres") === null) {
    localStorage.setItem("nombres", JSON.stringify([]));
}
formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    // Leo el input
    const nombre = inputNombre.value;
    console.log(nombre);
    // Leo el array que está dentro del localStorage
    const nombres = JSON.parse(localStorage.getItem("nombres"));
    console.log(localStorage.getItem("nombres"));
    // Agrego el nuevo nombre
    nombres.push(nombre);
    // Guardo
    localStorage.setItem("nombres", JSON.stringify(nombres));
    // Limpio el input
    inputNombre.value = "";
    // Veo en consola ¿Qué hice?
    console.log(nombres);
});