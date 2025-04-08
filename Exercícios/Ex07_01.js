const prompt = require('prompt-sync')();

let filmes = ['Carros', 'Need for Speed', 'Homem-Aranha', 'Velozes e Furiosos', 'Homem de Ferro', 'O segredo dos animais', 'Baby driver']
console.log(filmes [0])

console.log(filmes [4])

filmes[6] = 'Venom'
console.log(filmes)

filmes.push('Um Time Show de Bola')
console.log(filmes)

filmes.splice(5, 0, 'Deadpool')
console.log(filmes)

filmes.shift()
console.log(filmes)

filmes.pop()
console.log(filmes)

console.log(filmes.slice(0, 3))

console.log(filmes.slice(3, 7))

console.log(filmes.length)

filmes.reverse()
console.log(filmes)