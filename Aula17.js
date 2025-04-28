//Variáveis globais e locais

function nomeEscola(){
escola = "SESI"
console.log(escola)
//declarando uma variável local
var cidade = 'Andradina'
console.log(cidade)
}

//essa variável é global pois ela pode ser acessada em qualquer parte do código
var escola = "Senai"
console.log(escola)
nomeEscola()
var cidade = "Mirandópolis"
console.log(cidade)
//////////////////////////////////////////////
var x = 10 //Variavel global
console.log('Fora da função')

function minhaFuncao(){
    //Variavel local
    x = x + 1;
    console.log('Dentro da função', x)
}

minhaFuncao()
x +=1
console.log('Fora da função de novo', x)