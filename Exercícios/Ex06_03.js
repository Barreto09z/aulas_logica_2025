const prompt = require('prompt-sync')();

somapar = 0
somaimpar = 0
qtdpar = 0
qtdimpar = 0
let entrada = 0
for(let i = 0; i <= 5; i++){
    entrada = Number(prompt("Digite um numero: "))
    if(entrada % 2 == 0){
        somapar += entrada
        qtdpar++
    }else{
        somaimpar += entrada
        qtdimpar++
    }
}
console.log(`A soma de ${qtdpar} é ${somapar}`)
console.log(`A soma de ${qtdimpar} é ${somaimpar}`)