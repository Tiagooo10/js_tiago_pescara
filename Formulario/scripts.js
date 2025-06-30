const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nombre = document.getElementById("nombre").value
    const edad = parseInt(document.getElementById("edad").value)
    const correo = document.getElementById("correo").value
    const contraseña = document.getElementById("contraseña").value

    const errorNombre = document.getElementById("error_nombre")
    const errorEdad = document.getElementById("error_edad")
    const errorCorreo = document.getElementById("error_correo")
    const errorContraseña = document.getElementById("error_contraseña")
    const resultado = document.getElementById("resultado")

    errorNombre.innerText = ""
    errorEdad.innerText = ""
    errorCorreo.innerText = ""
    errorContraseña.innerText = ""

    if (nombre === ""){
        errorNombre.innerText = "Campo requerido."
    }else if(edad === ""){
        errorEdad.innerText = "Campo requerido."
    }else if(edad < 18){
        errorEdad.innerText = "Debes ser mayor de edad."
    }else if(correo === ""){
        errorCorreo.innerText = "Campo requerido."
    }else if(!correo.includes("@")){
        errorCorreo.innerText = "El correo debe contener @"
    }else if (contraseña === ""){
        errorContraseña.innerText = "Campo requerido."
    }else if (contraseña.length < 6){
        errorContraseña.innerText = "La contraseña debe tener al menos 6 caracteres."
    }else{

        let result = document.createElement("li")
        result.innerHTML = `
            🎉 ¡Registro exitoso! Bienvenido, ${nombre}.<br>
            Correo: ${correo}<br>
            Edad: ${edad} años
        `
        resultado.innerHTML = ""
        resultado.appendChild(result)

        document.getElementById("nombre").value = ""
        document.getElementById("edad").value = ""
        document.getElementById("correo").value = ""
        document.getElementById("contraseña").value = ""
    } 
})
