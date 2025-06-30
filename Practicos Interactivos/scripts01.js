// TODO: Calcular el precio de la entrada según la edad
// TODO: Mostrar un mensaje personalizado con alert
//Entre 13 y 17 → $1500
//Mayores de 17 → $2000
//Si la persona tiene menos de 5 años o más de 80 → entrada gratuita


const edad = parseInt(prompt("Ingrese su edad"))
let entrada = 0
if (edad > 80 || edad < 5){
    entrada = 0
    alert("El valor de la entrada es de: " + entrada)
} else if (edad >= 13 && edad <= 17 ){
    entrada = 1500
    alert("El valor de la entrada es de: " + entrada)
}else if (edad < 13){
    entrada = 1000
    alert("El valor de la entrada es de: " + entrada)
}else if (edad > 17){
    entrada = 2000
    alert("El valor de la entrada es de: " + entrada)
}else {
    alert("Ingrese una edad correcta.")
}
