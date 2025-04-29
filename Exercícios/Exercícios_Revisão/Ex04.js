const prompt = require('prompt-sync')()
let valor = Number(prompt("Quanto você ganha por hora: "))
let horas = Number(prompt("Quantas horas você trabalha no mês: "))
let valorMes = valor * horas
console.log(`Você ganhou R$${valorMes} este mês!`)