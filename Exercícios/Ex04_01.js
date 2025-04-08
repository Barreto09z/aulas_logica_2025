const prompt = require('prompt-sync')();

let diasemana = Number(prompt('Digite um número de 1 a 7: '))
switch(true){
    case diasemana == 1:
        console.log("Hoje é Domingo!")
        break
    case diasemana == 2:
        console.log("Hoje é Segunda-feira!")
        break
    case diasemana == 3:
        console.log("Hoje é Terça-feira!")
        break
    case diasemana == 4:
        console.log("Hoje é Quarta-feira!")
        break
    case diasemana == 5:
        console.log("Hoje é Quinta-feira!")
        break
    case diasemana == 6:
        console.log("Hoje é Sexta-feira!")
        break
    case diasemana == 7:
        console.log("Hoje é Sábado!")
        break
        default:
            console.log("BARRETO SEU LINDO!!!")
}