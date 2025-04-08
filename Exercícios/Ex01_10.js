const prompt = require('prompt-sync')()
let kmCorrido = Number (prompt ('Digite o kmCorrido:'))
let diasCorridos = Number (prompt ('Digite o diasCorridos:'))
let diaria = 60.00
let km = 0.15
let valorpagarkm= kmCorrido*km
let valorpagardiaria = diasCorridos*diaria
console.log(valorpagarkm)
console.log(valorpagardiaria)
console.log(valorpagardiaria + valorpagarkm)