const nombre = "Tiago"
const contraseña = "locoloco10"

const nombreLogIn = prompt("Ingrese el nombre de usuario: ")
const contraLogIn = prompt("Ingrese la contraseña: ")

if (nombre === nombreLogIn && contraseña === contraLogIn){
    alert("¡Bienvenido!")
}else{
    alert("Usuario o contraseña incorrectos.")
}

