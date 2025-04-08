const prompt = require('prompt-sync')();
let qtdh = 0
let qtdm = 0
let mediah = 0
let mediam = 0
let idade = 0
let sexo
for(let i = 0; i < 10; i++){
    idade = Number(prompt("Digite sua idade: "))
    sexo = prompt("Digite o sexo(M ou F): ").toUpperCase()

    if(sexo =='M'){
        mediah += idade
        qtdh++
    }else{
        mediam += idade
        qtdm++
    }
} 
console.log(`A média da idade dos homens: ${mediah / qtdh}`)
console.log(`A média da idade das mulheres: ${mediam / qtdm}`)