//Receba uma palavra do usuário e calcule quantas vogais há nesta palavra.
const prompt = require('prompt-sync')();
let vogais = ['a', 'e', 'i', 'o', 'u']


let palavra = prompt("Digite uma palavra:");



// Conta as vogais
let contador = 0;
for (let letra of palavra.toLowerCase()) {
  if (vogais.includes(letra)) {
    contador++;
  }
}

// Exibe o resultado
console.log(`A palavra "${palavra}" contém ${contador} vogais.`);