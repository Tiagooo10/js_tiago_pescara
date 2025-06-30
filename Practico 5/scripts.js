let productos = JSON.parse(localStorage.getItem("productos")) || []

const agregarProducto = () =>{
    const nombre = document.getElementById("nombre").value.trim()
    const categoria = document.getElementById("categoria").value.trim()
    const precio = document.getElementById("precio").value

    if (nombre !== "" % categoria !== "" && precio !== ""){

        productos.push({nombre, categoria, precio});

        localStorage.setItem("productos", JSON.stringify(productos))

        renderizarTabla()

        document.getElementById("nombre").value = ''
        document.getElementById("categoria").value = ''
        document.getElementById("precio").value = ''
    }
}

const renderizarTabla = () =>{

    const tabla = document.getElementById("resultado").querySelector("tbody")

    tabla.innerText = ""

    productos.forEach((producto, index) => {
        
        const fila = document.createElement("tr")

        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${producto.nombre}</td>
            <td>${producto.categoria}</td>
            <td>${producto.precio}</td>
            <td>
                <button onclick="eliminarProducto(${index})">Eliminar</button>
            </td>
            `
        
            tabla.appendChild(fila)
        
    });
}

const eliminarProducto = (index) => {

    productos.splice(index, 1)

    // Actualizar local storage
    localStorage.setItem("productos", JSON.stringify(productos))

    renderizarTabla()

}

// Evento que sirve para renderizar contenido una vez cardado el dom de la pagina inicial
document.addEventListener('DOMContentLoaded', () => {
    renderizarTabla()
})