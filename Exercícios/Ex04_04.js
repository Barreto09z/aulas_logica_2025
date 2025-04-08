const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite uma nota: '))
let nota2 = Number(prompt('Digite uma nota: '))
let media = (nota1 + nota2) / 2
switch(true){
case media >= 7:
    console.log('Aprovado!')
    break
case media >= 5:
    console.log('Recuperação!')
    break
    case media < 5:
        console.log('Reprovado!')
        break
}