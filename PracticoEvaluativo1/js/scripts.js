let libros = JSON.parse(localStorage.getItem('libros')) || []

let editando = false;
let indiceEditar = null;
let ordenAscendente = true;


const agregarLibro = () => {
    const titulo = document.getElementById('titulo').value.trim()
    const autor = document.getElementById('autor').value.trim()
    const anio = document.getElementById('anio').value
    const genero = document.getElementById('genero').value.trim()
    

    const errorTitulo = document.getElementById("errorTitulo")
    const errorNumero = document.getElementById("errorNumero")
    const errorGenero = document.getElementById("errorGenero")
    const errorAutor = document.getElementById("errorAutor")

    
    errorTitulo.innerText = ""
    errorAutor.innerText = ""
    errorNumero.innerText = ""
    errorGenero.innerText = ""

    let valido = true

    if (titulo === ""){
        errorTitulo.innerText = "Campo requerido."
        valido = false
    }
    if (autor === ""){
        errorAutor.innerText = "Campo requerido."
        valido = false
    }
    if (anio === ""){
        errorNumero.innerText = "Campo requerido."
        valido = false
    } else if (anio < 1900 || anio > 2025){
        errorNumero.innerText = "Ingrese un año entre 1900 y 2025"
        valido = false
    }
    if (genero === ""){
        errorGenero.innerText = "Campo requerido."
        valido = false
    }

    if (!valido) {
        return 
    }

    const tituloNormalizado = titulo.toLowerCase()
    const autorNormalizado = autor.toLowerCase()

    if (editando) {
        
        libros[indiceEditar] = { titulo, autor, anio, genero }
        editando = false
        indiceEditar = null

        
        document.querySelector('button[type="submit"]').innerText = 'Agregar Libro'
    } else {
        
        const duplicado = libros.some(libro =>
            libro.titulo.trim().toLowerCase() === tituloNormalizado &&
            libro.autor.trim().toLowerCase() === autorNormalizado
        )

        if (duplicado) {
            alert("Ya existe un libro con el mismo título y autor.")
            return
        }

        libros.push({ titulo, autor, anio, genero })
    }

    localStorage.setItem('libros', JSON.stringify(libros))

    renderizarLibros()
    mostrarResumen()

    
    document.getElementById('titulo').value = ''
    document.getElementById('autor').value = ''
    document.getElementById('anio').value = ''
    document.getElementById('genero').value = ''
}

const editarLibro = (index) => {
    const libro = libros[index]
    document.getElementById('titulo').value = libro.titulo
    document.getElementById('autor').value = libro.autor
    document.getElementById('anio').value = libro.anio
    document.getElementById('genero').value = libro.genero

    editando = true
    indiceEditar = index


    document.querySelector('button[type="submit"]').innerText = 'Guardar Cambios'
}

const eliminarLibro = (index) => {
    libros.splice(index, 1)
    localStorage.setItem('libros', JSON.stringify(libros))
    renderizarLibros()
}

const renderizarLibros = (lista = libros) => {
    const tabla = document.getElementById('tablaLibros').querySelector('tbody')
    tabla.innerText = ''

    lista.forEach(libro => {
        const indexReal = libros.indexOf(libro)

        const fila = document.createElement('tr')
        fila.innerHTML = `
            <td>${indexReal + 1}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.anio}</td>
            <td>${libro.genero}</td>
            <td>
                <button onclick="editarLibro(${indexReal})">Editar</button>
                <button onclick="eliminarLibro(${indexReal})">Eliminar</button>
            </td>
              <td>
            <input 
                type="checkbox" 
                ${libro.leido ? 'checked' : ''} 
                onchange="libroLeido(${indexReal}, this.checked)">
            </td>
        `

        tabla.appendChild(fila)
    })
}

const libroLeido = (index, estado) => {
    libros[index].leido = estado;
    localStorage.setItem('libros', JSON.stringify(libros));
};


const filtrarPorTitulo = () => {
    const titulo_buscado = document.getElementById('busqueda').value.toLowerCase()

    const libros_filtrados = libros.filter(libro => libro.titulo.toLowerCase().includes(titulo_buscado))

    renderizarLibros(libros_filtrados)
}

const actualizarSelectGenero = () => {
    const select = document.getElementById('filtroGenero')
    const generosUnicos = [...new Set(libros.map(libro => libro.genero))]

    select.innerHTML = `<option value="todos">Todos</option>`
    generosUnicos.forEach(genero => {
        const option = document.createElement("option")
        option.value = genero
        option.text = genero
        select.appendChild(option)
    })

}

const actualizarSelectLeido = () => {
    const select = document.getElementById('filtroLeido')
    const leidos = [...new Set(libros.map(libro => libro.leido))]

    select.innerHTML = `
        <option value="todos">Todos</option>
        <option value="leido">Leído</option>
        <option value="no_leido">No leído</option>
    `;
};

const filtrarPorGenero = () => {
    const genero = document.getElementById('filtroGenero').value

    if (genero === 'todos') {
        renderizarLibros()
    } else {
        const librosFiltrados = libros.filter(libro => libro.genero === genero)
        renderizarLibros(librosFiltrados)
    }
}

const filtrarPorLeido = () => {
    const valor = document.getElementById('filtroLeido').value;

    if (valor === 'todos') {
        renderizarLibros();
    } else if (valor === 'leido') {
        const filtrados = libros.filter(libro => libro.leido === true);
        renderizarLibros(filtrados);
    } else if (valor === 'no_leido') {
        const filtrados = libros.filter(libro => !libro.leido);
        renderizarLibros(filtrados);
    }
};

const mostrarResumen = () => {
    const resumen = document.getElementById('resumenLibros')

    if (libros.length === 0) {
        resumen.innerText = 'No existen libros cargados'
        return;
    }

    const totalLibrosLeidos = libros.filter(libro => libro.leido).length;


    const total = libros.length

    const sumaAnios = libros.reduce((acum, libro) => acum + parseInt(libro.anio), 0)

    const promedio = Math.round(sumaAnios / total)


    const despues2010 = libros.filter(libro => libro.anio >= 2010).length

    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.anio > nuevo.anio ? libro : nuevo), libros[0])

    
    const libroMasViejo = libros.reduce((nuevo, libro) => (libro.anio < nuevo.anio ? libro : nuevo), libros[0])


    resumen.innerHTML = `
    <p>Total de libros: ${total}</p>
    <p>Promedio: ${promedio}</p>
    <p>Libros posteriores a 2010: ${despues2010}</p>
    <p>Libro mas nuevo : </p>
    <p>Titulo: ${libroMasNuevo.titulo} </p>
    <p>Autor: ${libroMasNuevo.autor}</p>
    <p>Libro mas viejo:</p>
    <p>Titulo: ${libroMasViejo.titulo} </p>
    <p>Autor: ${libroMasViejo.autor}</p>
    <p>Total de libros leidos: ${totalLibrosLeidos}</p>
    `

}

const ordernarPorAnio = () => {
    const librosOrdenados = [...libros].sort((a, b) => {
        return ordenAscendente ? a.anio - b.anio : b.anio - a.anio
    })

    ordenAscendente = !ordenAscendente
    renderizarLibros(librosOrdenados)
}




document.addEventListener('DOMContentLoaded', () => {
    renderizarLibros()
    mostrarResumen()
    actualizarSelectGenero()
    actualizarSelectLeido();
})

