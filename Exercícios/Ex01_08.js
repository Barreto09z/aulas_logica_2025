const prompt = require('prompt-sync')()
let larguraMetros = Number (prompt ('Digite o larguraMetros:'))
let alturaMetros = Number (prompt ('Digite o alturaMetros:'))
let area = larguraMetros*alturaMetros
let litros = area/2
console.log(area)
console.log(litros)
