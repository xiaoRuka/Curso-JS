/*var vel = 50
console.log(`A velocidade do seu carro é ${vel}km/h`)
if (vel > 60) {
    console.log(`Você ultrapassou a velocidade permitida, MULTADO!`)
}
console.log('Dirija com segurança.')


var país = 'EUA'
console.log(`vivendo em ${país}`)
if (país != 'Brasil') {
    console.log('Você é estrangeiro')
}
else {
    console.log('Você é Brasileiro')
}*/

function resultado() {
    var country = window.document.getElementById('país')
    var res = window.document.querySelector('div#res')
    var resultadoInput = country.value
    
    res.innerHTML = `Seu país é ${resultadoInput}`
    if (resultadoInput == 'Brasil') {
        res.innerHTML += '</br>Você é Brasileiro'
    }
    else  {
        res.innerHTML += '</br>Você é estrangeiro'
    }
}