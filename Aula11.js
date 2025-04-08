const prompt = require('prompt-sync')()
//Trabalhando com laços de repetição(while)
//Executar o laço x vezes 

let contador = 1
//Irá repetir enquanto a condição for verdadeira
//Ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <=5){
    console.log(`o contador é ${contador}`)
    //incrementando a variavel ou seja adicionando valor a ela
    //para que continue o processo ate que a condução seja atingida
    //contador = contador++
    contador = contador + 1
}
console.log("FIM")
let senha_senai = '12345'
while(true){
    let senha = prompt("Digite sua senha:")
    if(senha_senai == senha){
        console.log("Você hackeou a senha!")
    break
}else if(senha == 'Desisto'){
    break
}
}

//Exercício sobre repetição

let soma = 0
let quantidade = 0

while(true){
    let valor = Number(prompt('Digite o valor do produto(0 para encerar): '))
    if(valor == 0){
        break
    }
    else{
        soma = soma + valor
        quantidade++
    }
}

console.log(`Foram informados ${quantidade}`)
//toFixed para colocar somente dois digitos após a virgula
console.log(`Valor total dos produtos ${soma.toFixed(2)}`)

let soma2 = 0
let quantidade2 = 0
let encerrar = "SUB-TOTAL"

while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt('Digite o valor do produto(0 para encerar): '))
        soma = soma2 + valor
        quantidade2++
    encerrar = prompt("Deseja continuar: (digite SUB-TOTAL")
}

console.log(`Foram informados ${quantidade2}`)
//toFixed para colocar somente dois digitos após a virgula
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`)

//Jogo de adivinhar número

console.log("##############################")
console.log("🏄‍♂️   JOGO DA ADIVINHAÇÃO   🏄‍♂️")
console.log("##############################")

let nrSorteado = Math.floor(Math.random() * 100 +1)
let acertou = false 
while(!acertou){
    const chute = parseInt(prompt('🥸 Digite um número entre 1 e 100 para adivinhar: '))
    if(chute > nrSorteado){
    console.log(`Você chutou ${chute}, 😡 tente um número menor!`)
    }
    else if(chute < nrSorteado){
        console.log(`Você chutou ${chute}, 👽 tente um número maior!`)
    }
    else if(chute == nrSorteado){
        console.log(`Você chutou ${chute}, 🎊 parabéns você acertou!`)
        acertou = true
    }

}
console.log("FIM")