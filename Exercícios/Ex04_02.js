const prompt = require('prompt-sync')();

let anoatual = Number(prompt('Digite o ano atual: '))
let anonascimento = Number(prompt('Digite o ano de nascimento: '))
let idade = anoatual - anonascimento
console.log(idade)
switch(true){
    case idade <= 10 :
        console.log("Você é uma criança!")
        break
    case idade <= 17:
        console.log("Você é uma adolescente!")
        break
    case idade <= 59:
        console.log("Você é uma adulto!")
        break
    case idade >= 60:
        console.log("Você é um idoso!")
        break
        default:
            console.log("kkk")
}