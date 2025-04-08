const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite uma nota: '))
let nota2 = Number(prompt('Digite uma nota: '))
let media = (nota1 + nota2) / 2
if(media >= 7){
    console.log('Aprovado!')
}
else if(media >=5 ){
    console.log('Recuperação!')
}
else if(media < 5){
    console.log('Reprovado!')
}
