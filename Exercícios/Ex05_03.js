const prompt = require('prompt-sync')();

let entrada
let pares = 0
let somapar = 0
let impar = 0
let somaimp = 0

console.log("digite um numero (0 para encerrar): ")
while(true){
    entrada = parseFloat(prompt("Numero: "))

    if(entrada === 0){
        break; //encerrar loop
    }
    if(entrada % 2 == 0){
        somapar = entrada + somapar
        pares++ 
    }else{
        somaimpar = entrada + somaimp
        impar++
    }
}
console.log(`Soma dos pares digitados: ${somapar} quantidade de par ${pares}`)
console.log(`Soma dos impares digitados: ${somaimp} quantidade de impar ${impar}`)