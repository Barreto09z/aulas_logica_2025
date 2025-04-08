//declarando um novo vetor
//reconheço q é um vetor pelo uso dos colchetes
let listaVazia = []
//declarando lista de numeros
let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros [2])

//declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Matheus']
console.log(nomes)
//declaração de uma lista mista
let mista = [1, "dois", true, 2.5]
console.log(mista)
//declaração de uma lista com lista
let listacomlista = [
    ['coca-cola', 'cachorro quente']
    [5.0, 10.0]
]
console.log(listacomlista)

//Alterando valores da lista
let frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas)
//push adiciona um novo elemento na lista 
frutas.push('laranja')
console.log(frutas)
//o spread adiciona um novo elemento no vetor
frutas = [...frutas, 'Banana']
console.log(frutas)

//slice adiciona um novo item em uma posição
frutas.slice(2, 0, 'morango')
console.log(frutas)

//Excluindo item da lista
frutas.slice(3,1)
console.log(frutas)
frutas.shift()
frutas.pop()
console.log(frutas)
//Acessar os itens da lista
console.log(frutas[3])
    console.log(frutas.slice(0,4))
    console.log(frutas.slice(1))
    console.log(frutas.slice(-1))
    console.log(frutas.length)

    //ordenar itens da lista
    console.log(frutas)
    frutas.sort()//ordena em ordem crescente
    console.log(frutas)
    frutas.reverse()//ordem descrescente
    console.log(frutas)