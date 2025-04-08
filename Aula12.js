const prompt = require('prompt-sync')()

for(let i = 0; i < 100; i++){
    console.log(i)
}

console.log("Entregando notebooks")

for(let nmr = 1; nmr <= 32; nmr++){
    let nome = prompt(`Quem é o numero ${nmr}?`)
    let presente = prompt(`o(A) ${nome} veio para a escola? (S ou N)`)
    if(presente == 'S'){
        console.log(`Pegar notebook ${nmr}`)
        console.log(`Pegar mouse ${nmr}`)
        console.log(`Pegar fonte ${nmr}`)
        console.log(`Levar notebook até ${nmr}`)
    }else{
        console.log(`Não pegar notebook ${nmr}`)
    }
}