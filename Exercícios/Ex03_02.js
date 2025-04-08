const prompt = require('prompt-sync')();

let anoatual = Number(prompt('Digite o ano atual: '))
let anonascimento = Number(prompt('Digite o ano de nascimento: '))
let idade = anoatual - anonascimento
console.log(idade)
    if(idade <= 10){
        console.log('Você é uma criança!')
    }
    else if(idade <= 17){
        console.log('Você é um adolescente!')
    }
    else if(idade <= 59){
        console.log('Você é um adulto!')
    }
    else if(idade >= 60){
        console.log('Você é um idoso!')
    }