//Nessa string ‘Gol; Corsa; Palio; Monza; Fusca;’, faça a separação desses itens para uma lista e exiba o item e a posição que ele está.
let carros = 'Gol, Corsa, Palio, Monza, Fusca'

let listaCarros = carros.split(',')
for(let carros of listaCarros){
    console.log(carros);
}
