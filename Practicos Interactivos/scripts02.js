
let cuenta = parseInt(prompt("Ingrese la cuenta: "))
let servicio = prompt("Como fue el servicio: (malo, bueno o excelente)")

if (servicio === "malo"){
    let valor_final = cuenta * 1.10
    alert("Este es el precio final: " + parseFloat(valor_final))
}else if (servicio === "bueno"){
    valor_final = cuenta * 1.15
    alert("Este es el precio final: " + parseFloat(valor_final))
}else if (servicio === "excelente"){
    valor_final = cuenta * 1.20
    alert("Este es el precio final: " + parseFloat(valor_final))
}

