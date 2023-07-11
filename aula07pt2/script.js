

function calcular () {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}<strong>km/h`
    if (vel > 60) {
        res.innerHTML += '<p>Você está MULTADO por excesso de velocidade</p>'
    }
    res.innerHTML += '<p> Dirija sempre com cinto de segurança </p>'

}