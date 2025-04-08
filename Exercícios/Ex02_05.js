const prompt = require('prompt-sync')();

let idade = Number(prompt('Digite seu ano de nascimento:'))
let ano = idade - 2025
if(ano > 18){
    console.log('você é maior de idade!')

}else{
    console.log('você é não é maior de idade!')
}
