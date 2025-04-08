const prompt = require('prompt-sync')();

let velocidade = Number(prompt('Qual a velocidade do veículo:'))
let multa = (velocidade - 80) * 7

if(velocidade <= 80){
    console.log('você está no limite')

}else{
console.log(`você não está no limite e terá que pagar`)
console.log(`R$${multa}`)
}