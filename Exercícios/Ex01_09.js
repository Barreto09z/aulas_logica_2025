const prompt = require('prompt-sync')()
let precoProduto = Number (prompt ('Digite o precoProdutos:'))
let desconto = 5/100
let valorFinal = precoProduto - desconto
console.log(valorFinal)
