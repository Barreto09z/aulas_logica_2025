const prompt = require('prompt-sync')()

//operação com variáveis
let nr1 = Number(prompt("Digite um numero?"))
let nr2 = Number(prompt("Digite um numero?"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

//Subtracao
let subtracao = nr1 - nr2
console.log(`A subtracao entre ${nr1} - ${nr2} é igual: ${subtracao}`)

//multiplicação
let multiplicacao = nr1 * nr2
console.log(`A multiplicação entre ${nr1} X ${nr2} é igual: ${multiplicacao}`)

//divisao
let divisao = nr1 / nr2
console.log(`A divisão entre ${nr1} / ${nr2} é igual: ${divisao}`)

//Exponenciação
let exponenciacao = nr1 ** nr2
console.log(`A exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

//Calculando valor do celular com desconto
let valor = Number(prompt("Digite o valor do celular?"))
let desconto = Number(prompt("Digite o valor do desconto?"))
valor = valor - desconto
console.log(`O valor do celular com o desconto é R$${valor}`)
//Dobro e metade
let numero = Number(prompt("Digite um numero?"))
console.log(`Seu dobro é: ${numero * 2}`)
console.log(`Sua metade é: ${numero / 2}`)

//Calculando o valor de horas
let valor1 = Number(prompt("Digite o valor por hora:"))
console.log("O total de horas que vou trabalhar é 120h")
console.log(`Irei ganhar R$${valor1 * 120} no total`)

//Variante 
let valor2 = 100
let dias = 15
let horas = 8
let total_de_horas = dias * horas
let valor_total = valor2 * total_de_horas
console.log(valor_total)
