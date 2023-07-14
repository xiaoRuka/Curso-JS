function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 6 && hora < 12) {
        // Bom dia!
        img.src = './images/manha.jpg'
        document.body.style.background = 'pink'
    } else if (hora >= 12 && hora < 18) {
       // Boa tarde 
       img.src = './images/tarde.jpg'
       document.body.style.background = 'orange'
    } else if (hora >= 18 && hora < 24 ) {
        //Boa noite
        img.src = './images/noite.jpg'
        document.body.style.background = 'grey'
    } else {
        //Boa madrugada
        img.src = './images/madrugada.jpg'
        document.body.style.background = 'black'
    }
}