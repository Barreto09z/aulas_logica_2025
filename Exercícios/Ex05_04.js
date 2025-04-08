const prompt = require('prompt-sync')();

let numero = 0
let entrada
let maior
let menor
let soma
while(numero <= 10){
    entrada = Number(prompt("Digite um numero: "))
    if(entrada > maior){
        maior = entrada   
    }
    if(entrada < menor){
        menor = entrada   
       }
       soma += entrada
       numero++
}
let media = soma / 10
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)
console.log(`Media: ${media.toFixed(2)}`)