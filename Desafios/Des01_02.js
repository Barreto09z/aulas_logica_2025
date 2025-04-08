const prompt = require('prompt-sync')()

let horas =Number(prompt('Que horas são? '))
if(horas >=5 && horas <=11){
    console.log('bom dia! ');
   
}else if(horas >=12 && horas<= 17){
    console.log('boa tarde!');
   
}else if(horas >= 18 && horas <= 23){
    console.log('boa noite!');
   
}else{console.log('Boa madrugada!');
}
