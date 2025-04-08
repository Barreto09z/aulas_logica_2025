const prompt = require('prompt-sync')();

let salario = Number(prompt('Digite o salario ganho: '))
let aumento12 = (salario * 12) / 100
let aumento10 = (salario * 10) / 100
let aumento8 = (salario * 8) / 100
switch(true){
case salario <= 2000:
    console.log(aumento12)
    break
    case salario >=2001:
        console.log(aumento10)
        break
        case salario > 4000:
            console.log(aumento8)
            break
}