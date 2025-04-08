const prompt = require('prompt-sync')();

let valor = Number(prompt('Quanto vendeu este mês:'))
let comissão1 = (valor * 5) / 100
let comissão2 = (valor * 3) / 100

if(valor >= 5000){
    console.log('você irá receber uma comissão de')
    console.log(`R$${comissão1}`)

}else{
console.log(`você vendeu menos de R$5000, e terá uma comissão de`)
console.log(`R$${comissão2}`)
}