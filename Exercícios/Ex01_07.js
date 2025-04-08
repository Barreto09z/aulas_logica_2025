const prompt = require('prompt-sync')()
let carteira = Number(prompt("Digite o valor do dinheiro:"))
let dolar = carteira / 5.22
console.log(`você pode contar ${dolar} dólares em sua carteira.`)