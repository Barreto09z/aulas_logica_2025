const prompt = require('prompt-sync')();

let contador = 1

while(contador <= 20){
    if(contador % 2 == 0){
        console.log(contador)
    }
    contador++
}