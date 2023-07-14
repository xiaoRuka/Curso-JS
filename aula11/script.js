let numero = [5,8,4,6,1]

console.log(`Nosso vetor é o ${numero}`)
console.log(`O primeiro valor do vetor é ${numero[0]}`)
//console.log(numero)


/*for(let pos = 0; pos < numero.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${numero[pos]}`)
    document.write(`</br>A posição ${pos} tem o valor ${numero[pos]}`)
}*/

for(let pos in numero) {
    console.log(`A posição ${pos} tem o valor ${numero[pos]}`)
}

let teste = numero.indexOf(9)
console.log(`O valor 9 está na posição ${teste}`)
if (teste == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${teste}`)
}