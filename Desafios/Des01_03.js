const prompt = require('prompt-sync')()

let abastecer =(prompt('vai abstecer com o que? '))
let alcool = Number(prompt('digite o valor do alcool: '))
let gasolina = Number(prompt('digite o valor da gasolina: '))
let calculos = (gasolina * 70) / 100

if(alcool < calculos){
    console.log('abasteça com alcool');
   
}else{
    console.log('abasteça com gasolina, pois o valor é melhor');
   
}

