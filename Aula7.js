const prompt = require('prompt-sync')()
// estruturas condicionais e operadores relacionais
let a = 2
let b = 3
console.log(a == b) //relação de igualdade
console.log(a != b) //relação de diferença
console.log(a > b) //maior
console.log(a >= b) //maior ou igual
console.log(a < b) //menor
console.log(a <= b) //menor ou igual

//estruturas condicionais
let tenhoIngresso = true
if(tenhoIngresso == true){
    console.log('Posso entrar!')
}

//validando maioridade

//recebendo o valor da idade
let idade = Number(prompt('qual a sua idade?'))

//verificar se e maior ou igual a 18
if(idade >=18){
    console.log('maior idade')
}

tenhoIngresso = false
if(tenhoIngresso == true){
    console.log('Posso entrar!')
}else{
    console.log('estou barrado no baile')
}

//outro exemplo de estrutura condicional(if-else)
idade = Number(prompt('digite a idade:'))
//verificar se e maior que 18
if(idade >= 18){
    console.log(' voce é maior de idade')
}else{
    console.log('voce e menor de idade')
}
