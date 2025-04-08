const prompt = require('prompt-sync')()

let numero1 = Number(prompt("Digite um numero:"))
let numero2 = Number(prompt("Digite um numero:"))

if(numero1 >= numero2){
    console.log('maior')
}else{
    console.log('menor')
}
if(numero2 >= numero1){
    console.log('maior')
}else{
    console.log('menor')
}