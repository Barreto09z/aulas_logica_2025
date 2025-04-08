const prompt = require('prompt-sync')()

let temperatura = Number(prompt('Digite a temperatura de hoje: '))
if(temperatura <= 15){
    console.log('Frio!')
}
else if(temperatura > 15 && temperatura <= 25){
    console.log('Agradável!')
}
else if(temperatura >= 26 && temperatura <= 35){
    console.log('Quente!')
}
else{
    console.log('Muito Quente!')
}
