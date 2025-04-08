const prompt = require('prompt-sync')();

let comidas = []
for(let i = 0; i < 6; i++){
    let comida = prompt(`Digite o nome da comida ${i + 1}: `)
    comidas.push(comida)
}

console.log(comidas)
console.log(comidas [0])

console.log(comidas [4])

comidas[5] = 'Abacaxi'
console.log(comidas)

comidas.push('Maçã')
console.log(comidas)

comidas.splice(5, 0, 'Banana')
console.log(comidas)

comidas.shift()
console.log(comidas)

comidas.pop()
console.log(comidas)

console.log(comidas.slice(0, 3))

console.log(comidas.slice(3, 7))

console.log(comidas.length)

comidas.reverse()
console.log(comidas)