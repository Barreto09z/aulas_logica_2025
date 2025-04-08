const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um numero:"))

if(numero > 0){
    console.log('Seu numero é positivo')
}else{
    console.log('Seu numero é negativo')
}