{/* <form id="formulario">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" placeholder="Ej: Camila">
  <button type="submit">Agregar</button>
</form> */}

if (!localStorage.getItem("nombres")) {
    localStorage.setItem("nombres", JSON.stringify([]));
}
const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("nombre");
formulario.addEventListener("submit", function (e) {
    e.preventDefault(); 
    
    const nombre = inputNombre.value.trim();
    if (nombre === "") return;
    // leo el array 
    const nombres = JSON.parse(localStorage.getItem("nombres"));
   
    nombres.push(nombre);
   //guardo
    localStorage.setItem("nombres", JSON.stringify(nombres));
    console.log(nombres);
   
    inputNombre.value = "";
});