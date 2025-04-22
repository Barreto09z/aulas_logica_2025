const prompt = require('prompt-sync')()
function senha(qc) {
    let senhaGerada = ''
    let lista = ['h', 't', 'v', 'f', 'k', '0', '5', '8', '*']

    for (let i = 0; i < qc; i++) {
        let aleatorio = Math.floor(Math.random() * lista.length)
        senhaGerada += lista[aleatorio]
    }

    console.log(`Senha: ${senhaGerada}`)
}

senha(8)
