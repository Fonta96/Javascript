debugger

let sumamos = true
let numero = parseInt(prompt("Por favor, ingrese un numero de un digito"))
let factor = 1 

while (sumamos) {
    console.log("Resultado de la suma", numero + factor)
    sumamos = confirm("¿Siguiente suma?") 
    if(sumamos) {
        factor++
    }
}