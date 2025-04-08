const prompt = require('prompt-sync')()

let altura =Number(prompt('digite sua altura:'))
let peso =Number(prompt('digite seu peso'))
let imc = peso/(altura **2)
if(imc<18.5){
    console.log('abaixo do peso ideal')
}else if(imc >=25 && imc<25){
    console.log('peso ideal')
}else if(imc >= 25 && imc <30){
    console.log('sobrepeso')
}else{
    console.log('obesidade')
}

//verificar se o triangulo é equilatero ou escaleno
//receber o lado 1
let lado1 = Number(prompt('Digite o valor do lado 1:'))
let lado2 = Number(prompt('Digite o valor do lado 2:'))
let lado3 = Number(prompt('Digite o valor do lado 3:'))

//verificar se o triangulo é equilatero caso tenha todos os lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)
console.log('triangulo equilatero ?', eq, 'Triangulo Escaleno', es)

let lado01 =Number(prompt('digite o valor de um lado de um tirnagulo:'))
let lado02 =Number(prompt('digite o valor de outro lado de um tirnagulo:'))
let lado03 =Number(prompt('digite o valor de outro do outro lado de um tirnagulo:'))

if(lado01== lado02 && lado02 == lado03){
    console.log('seu tiangulo e equilatero')
}else if(lado01 != lado02 && lado02 != lado03 && lado01 != lado03)
    {console.log('seu tiangulo e escaleno')

    }else{
        console.log('triangulo e isosceles');
       
    }

    //descobrir a quantidade de horas trabalhadas 
    let horas = Number(prompt('Total de horas trabalhadas: '))
    let vendas = Number(prompt('Total de vendas: '))

    //validar se uma das condições foram atendidas (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
    if(horas > 5000 || horas > 40){
        console.log('Tem direito ao bonus')
    
    }else{
        console.log('Não tem direito ao bonus')
    }

    //crie um algorítimo que receba um caráctere e verifique se ele é uma vogal ou uma consoante 
    let letra = prompt('Digite uma letra: ')
    let vogal = ("a" ||vogal == "e" ||vogal == "i" ||vogal == "o" ||vogal == "u")
    if(letra == vogal ){
        console.log('Sua letra é uma vogal!')
    }else{ 
        console.log('Sua letra é uma consoante')
    }