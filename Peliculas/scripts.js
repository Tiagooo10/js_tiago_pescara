let peliculas = JSON.parse(localStorage.getItem("peliculas")) || []

const agregarPelicula = () =>{

    const pelicula = document.getElementById("pelicula").value.trim()

    if (pelicula !== ""){

        peliculas.push(pelicula)

        localStorage.setItem("peliculas", JSON.stringify(peliculas))

        document.getElementById("pelicula").value = ''

        // Mostrar solo esa película
        const lista = document.getElementById("resultado");
        lista.innerText = "";

        const peli = document.createElement("li");
        peli.textContent = pelicula;
        lista.appendChild(peli);

        // Limpiar el input
        document.getElementById("pelicula").value = "";
    };    
}

const verTodas = () => {

    const lista = document.getElementById("resultado");

    lista.innerText = ""

    peliculas.forEach((pelicula, index) =>{

        const fila = document.createElement("li")

        fila.textContent = pelicula

        document.getElementById("pelicula").value = "";

        const boton = document.createElement("button");
        boton.textContent = "Eliminar";

        boton.onclick = () => eliminarPelicula(index);

        fila.appendChild(boton);
        lista.appendChild(fila);

    })
}

const eliminarPelicula = (index) =>{

    peliculas.splice(index, 1); // elimina del array
    localStorage.setItem("peliculas", JSON.stringify(peliculas)); // actualiza localStorage
    verTodas(); // refresca la lista
}


const mostrarNumeradas = () =>{

  let numeradas = peliculas.map((pelicula, index) => (index + 1) + ". " + pelicula);
  
  alert(numeradas.join("\n")); // para mostrar en líneas separadas
}


