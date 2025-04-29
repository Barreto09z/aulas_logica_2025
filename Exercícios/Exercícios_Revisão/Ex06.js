const prompt = require('prompt-sync')()
let altura = Number(prompt('Qual sua altura: '))
let sexo = prompt('Qual seu sexo: ')

if(sexo == 'Masculino'){
    console.log(`Seu peso é: ${(72.7 * altura) - 58}`)
}else{
    (sexo == 'Feminino')
    console.log(`Sua altura é: ${(62.1 * altura) - 44.7}`)
}