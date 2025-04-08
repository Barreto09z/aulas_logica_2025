const prompt = require('prompt-sync')();

let times = ['Athletico Paranaense', 'Atlético Mineiro', 'Atlético Goianiense', 'Bahia', 'Botafogo', 'Bragantino', 'Corinthians', 'Criciúma', 'Cruzeiro', 'Cuiabá', 'Flamengo', 'Fluminense', 'Fortaleza', 'Grêmio', 'Internacional', 'Juventude', 'Palmeiras', 'São Paulo', 'Vasco da Gama', 'Vitória']
console.log(times)

console.log(`${times[0]}é o campeão`)

console.log(`Os times: ${times.slice(0, 4)}, vão jogar a libertadores!`)

console.log(`Os times: ${times.slice(16, 20)}, estão rebaixados para a série B!`)