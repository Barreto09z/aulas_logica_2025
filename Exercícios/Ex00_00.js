const prompt = require('prompt-sync')()

console.log("Bem-vindo ao curso de JavaScript!")
console.log("Estou aprendendo a usar o console.log.")
console.log(15 + 25);
console.log(100 - 45);
console.log(12 * 7);
console.log(144 /12);
console.log(20 % 3);
console.log(2 ** 5);

let nomeAluno = "Barreto"
let altura = '1.73'
let escola = "Sesi-sp 025"
let ano = '2025'

console.log(nomeAluno)
console.log(altura)
console.log(escola)
console.log(ano)

let nomeProfessor = "ed carlos"
let materia = "matematica"
let anoIngresso = "2019"

console.log(nomeProfessor)
console.log(materia)
console.log(anoIngresso)
 
nomeAluno = prompt("Qual é seu nome?")
altura = parseFloat(prompt("Qual é sua altura?"))
escola = prompt("Qual é sua escola?")
ano = parseInt(prompt("Qual ano voce esta?"))
nomeProfessor = prompt("Qual o nome do seu professor?")
materia = prompt("De qual materia é ele?")
anoIngresso = parseInt(prompt("Qual ano ele ingressou na escola?"))
console.log(`Seu nome é ${nomeAluno}, voce tem ${altura} de altura, estuda na escola${escola}, esta no ano de ${ano}. Seu professor é${nomeProfessor},
    é da matéria de${materia} e ingressou no ano de ${anoIngresso}`)
