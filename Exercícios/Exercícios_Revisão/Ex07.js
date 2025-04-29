const prompt = require('prompt-sync')()
let valor = Number(prompt("Quanto você ganha por hora: "))
let horas = Number(prompt("Quantas horas você trabalha no mês: "))
let valorMes = valor * horas
console.log(`Você ganhou R$${valorMes} este mês!`)

let IR = (valorMes * 11) / 100
let INSS = (valorMes * 8) / 100
let sindicato = (valorMes * 5) / 100
let liquido = (((valorMes - IR) - INSS) - sindicato)

console.log(`O valor pago ao IR é: R$${IR}, o valor pago ao INSS é R$${INSS}, o valor pago ao Sindicato é R$${sindicato} e o valor líquido é R$${liquido}`)