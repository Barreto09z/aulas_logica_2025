const prompt = require('prompt-sync')();

let diasemana = Number(prompt('Digite um número de 1 a 7: '))
    if(diasemana == 1){
        console.log('Hoje é domingo!')
    }
    else if(diasemana == 2){
        console.log('Hoje é segunda!')
    }
    else if(diasemana == 3 ){
        console.log('Hoje é terça!')
    }
    else if(diasemana == 4 ){
        console.log('Hoje é quarta!')
    }
    else if(diasemana == 5 ){
        console.log('Hoje é quinta!')
    }
    else if(diasemana == 6){
        console.log('Hoje é sexta!')
    }
    else if(diasemana == 7){
        console.log('Hoje é sábado!')
    }