//Importando a biblioteca para entrada de dados
const prompt = require('prompt-sync')()

//variaveis e constantes
//Passo 1: Receber o nome da pessoa
let _nome = 'Barreto'
//Passo 2: Receber a idade da pessoa
let _idade = 15
//Passo 3: Receber o peso da pessoa
let _peso = 63.4
//Passo 4: Exibir o nome, a idade e o peso
console.log(_nome, _idade, _peso)

// REcer e armazena o texto
   let   curso   =         "Desenvolvimento de sistemas"
// #tipo  nome  recebe  valor    na variável

//Exibir o valor armazenado
console.log("curso") //Imprimo uma string(texto)
console.log(curso) //Imprimo o valor que está dentro da variavel
console.log("curso:", curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 16 //valor do tipo int
let temperatura = 23.5 //valor do tipo float
let nome2 = "Matheus"

console.log("olá", nome2, "você tem:", idade2, "anos,",
    "e hoje esta fazendo", temperatura, "ºC" )

    //usando template string
    console.log(`olá ${nome2}, voce tem ${idade2} anos,
        e hoje esta fazendo: ${temperatura}ºC`)

        let chovendo = false
        let dia = true 
        // nas constantes não podem ser reatribuidas novos valores
        PI = 3.1415
        console.log(PI)

        //Utilizando prompt para receber dados
        //Entrada de dados

        //no prompt sempre recebemos uma string
        nome = prompt('Qual é seu nome?')
        //usando o parseInt ou parseFloat converte os valores recebidos
        //que vem como string para int ou float
        idade = parseInt(prompt("Qual é sua idade?"))
        peso = parseFloat(prompt('Qual é seu peso?'))
        
        console.log(`Seu nome é ${nome}, voce tem ${idade}, anos e pesa ${peso}kg`)
        // valida o tipo variavel
        console.log(typeof(idade))
        console.log(typeof(peso)) 
        //Apos a conversao dos valores é possivel realizar
        //calculos matemáticos
        console.log(idade + peso)