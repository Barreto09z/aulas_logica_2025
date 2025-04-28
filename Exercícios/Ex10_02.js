const prompt = require('prompt-sync')()
let euro = 6.45
let dolar = 5.70
let reais = Number(prompt('Quantos reais você quer converter: '))

function conversão(){
    console.log(reais / euro)
    console.log(reais / dolar)
}
conversão()
