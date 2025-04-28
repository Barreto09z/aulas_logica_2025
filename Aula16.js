//Programando a dinamica de criptografia
let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let segredo = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C']

function criptografar(texto){
    let resultado = ''
    for(letra of texto){
        let posicao = alfabeto.indexOf(letra)
        resultado += segredo[posicao]
    }
    return resultado 
}
console.log(criptografar('SENAI'))
console.log(criptografar('VHQDL'))
