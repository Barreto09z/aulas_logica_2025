const prompt = require('prompt-sync')()
let nota1 = Number(prompt("Digite sua nota:"))
let nota2 = Number(prompt("Digite sua nota:"))
let media = nota1 + nota2
let resultado = media / 2
console.log(`nota1: ${nota1}, nota2: ${nota2}, média: ${resultado}`)

if(resultado >= 7){
    console.log('Aprovado')
}else{
    console.log('reprovado')
}
