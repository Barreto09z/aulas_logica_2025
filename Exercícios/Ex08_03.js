const prompt = require('prompt-sync')();

let letra = 'j'
let meses = ["Janeiro", "Fevereiro", "Março", "Abril","Maio", "Junho", "Julho", "Agosto","Setembro", "Outubro", "Novembro", "Dezembro"];

for(let i = 0; i < meses.length; i++){

    console.log(meses[i]);

    if (meses[i][0] === letra){
        console.log(meses[i]);
    }
}