let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']

//Variável x só serve para iterar os valores até o limite da lista
//O nome não é obrigatóriamente ser o nome i, x ou contador
//Pode ser qualquer da varíavel
for(let x = 0; x < frutas.length; x++){
    //O length identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ['Barreto', 'Rafinha', 'Natalia', 'Raul Açucarado']
//Pra cada nome da lista nomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}

//Verificando se é uma consoante
//Lista de vogais
const prompt = require('prompt-sync')()
let vogais = ['a', 'e', 'i', 'o', 'u']

let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'l', 'm', 'n', 
    'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', ]
let letra = prompt('Digite uma letra: ')
//Se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal')
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('Consoante')
}else{
    console.log('Não é uma letra')
}

//Obtendo a posição do item
for(let[pos, frutas] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor, ou seja a posição e a fruta
    console.log(`Posição ${pos} e a fruta ${fruta}`)
}

//separando os itens em uma lista 
let produtos = ' celular, notebook, TV, tablet, Headset'
//O split divide a string e forma uma lista a partir do limitador, ou seja abaixo um vírgula
let listaProdutos = produtos.split(',')
for(let produto of listaProdutos){
    console.log(produto)
}

//Percorrendo uma string como uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}
console.log('bertuci é viado, gay, arrombado, pau no cu, filho da pu**, desgramado, desgraçado, lixo, vagabundo, puto, piranho, cachorro, salafrário, sem vergonha, safado, mentiroso, perigoso, pilantra, destruidor de lares, imundo, cafajeste, filhodaputamente mau humorado, retardado, homosexual e BIXA!')