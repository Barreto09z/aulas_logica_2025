const prompt = require('prompt-sync')();

let mes = prompt('Digite um mês: ')
    switch(true){
    case mes  == 'janeiro':
        console.log('Seu mês tem 31 dias!')
        break
    case mes == 'fevereiro':
        console.log ('Seu mês tem 28 dias!')
        break
    case mes == 'março':
        console.log ('Seu mês tem 31 dias!')
        break
    case mes == 'abril':
        console.log ('Seu mês tem 30 dias!')
        break
    case mes == 'maio':
        console.log ('Seu mês tem 31 dias!')
        break
    case mes == 'junho':
        console.log ('Seu mês tem 30 dias!')
        break
    case mes == 'julho':
        console.log ('Seu mês tem 31 dias!')
    break
    case mes == 'agosto':
        console.log ('Seu mês tem 31 dias!')
        break
    case mes == 'setembro':
        console.log ('Seu mês tem 30 dias!')
        break
    case mes == 'outubro':
        console.log ('Seu mês tem 31 dias!')
        break
    case mes == 'novembro':
        console.log ('Seu mês tem 30 dias!')
        break
    case mes == 'dezembro':
        console.log('Seu mês tem 31 dias!')
        break
    }