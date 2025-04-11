let kilos = parseFloat(prompt("Ingrese los kilos: "))
let metros = parseFloat(prompt("Ingrese la altura en metros: "))
let imc = kilos / (metros * metros)
alert("El imc es de:  " + imc)

if (imc < 18.5){
    alert("Bajo peso.")
}else if (imc > 18.5 && imc < 24.9){
    alert("Peso normal.")
}else if(imc > 25 && imc < 29.9){
    alert("Sobrepeso.")
}else if(imc > 30){
    alert("Obesidad.")
}