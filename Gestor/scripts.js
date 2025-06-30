const formulario = document.getElementById("formulario");
const productos = [];
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const categoria = document.getElementById("categoria").value;
  const precio = document.getElementById("precio").value;

  const errorNombre = document.getElementById("error_nombre")
  const errorCategoria = document.getElementById("error_categoria")
  const errorPrecio = document.getElementById("error_precio")

  errorNombre.innerText = ""
  errorCategoria.innerText = ""
  errorPrecio.innerText = ""

    if (nombre === ""){
        errorNombre.innerText = "Campo requerido."
    }else if(categoria === ""){
        errorCategoria.innerText = "Campo requerido."
    }else if(precio === ""){
        errorPrecio.innerText = "Campo requerido."
    }else{
        const producto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio
         };

    productos.push(producto);
    renderizarTabla();
 
};
});

function renderizarTabla() {
    resultado.innerHTML = ""; // Limpiar tabla

    productos.forEach((producto, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${producto.nombre}</td>
      <td>${producto.categoria}</td>
      <td>${producto.precio}</td>
    `;

    const celdaEliminar = document.createElement("td");
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";

    btnEliminar.addEventListener("click", () => {
      productos.splice(index, 1); // Eliminar del array
      renderizarTabla(); // Volver a dibujar
    });

    celdaEliminar.appendChild(btnEliminar);
    fila.appendChild(celdaEliminar);
    resultado.appendChild(fila);
  
    });
}