let nombre = "Tiago";
let edad = 18;
let tieneDNI = true;
let tieneAutorizacion = false;


console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Tiene DNI:", tieneDNI);
console.log("Tiene Autorización:", tieneAutorizacion);


let puedeInscribirse = (edad >= 18 || tieneAutorizacion) && tieneDNI;


console.log(puedeInscribirse ? "Puede inscribirse" : "No puede inscribirse");


let producto1 = 300
let producto2 = 400
let esEstudiante = true

let totalSinDescuento = producto1 + producto2 


let descuento = (esEstudiante === true)

console.log(totalSinDescuento)
console.log(descuento ? "Se aplico el descuento" : "No se aplico el descuento")
console.log(descuento ? totalSinDescuento - totalSinDescuento * 0.10 : totalSinDescuento)


