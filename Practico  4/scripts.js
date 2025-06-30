const boton = document.getElementById("agregar_participantes")
const lista = document.getElementById("participantes")
const input = document.getElementById("nueva_tarea")
const error = document.getElementById("error")

boton.addEventListener("click", () => {
    const texto = input.value.trim()
    console.log("texto", texto);

    if (texto === ""){
        error.innerText = "Ingrese un participante."
        return
    }
        error.innerText = ""
        const li = document.createElement('li')
        li.innerText = texto

        const marcarPresente = document.createElement("button")
        marcarPresente.innerText = "Presente"
        marcarPresente.style.marginLeft = '10px'

        const eliminarPart = document.createElement("button")
        eliminarPart.innerText = "Eliminar"
        eliminarPart.style.marginLeft = "10px"

        marcarPresente.addEventListener('click', () => {
            li.classList.toggle("presente")
        })

        eliminarPart.addEventListener('click', () => {
            lista.removeChild(li)
        })

        li.appendChild(marcarPresente)
        li.appendChild(eliminarPart)
        lista.appendChild(li)
    
        input.value = ""
    }
)