document.addEventListener('load', carregar())
function carregar() {
var good = document.querySelector('div#good')
var img = document.querySelector('img#imagem')

var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

if (hora < 12 && hora >= 6) {
    good.innerHTML = `Bom dia! São ${hora}:${min} nesse exato momento.`
    img.src = 'manha.png'
    document.body.style.background = '#5d7e8c'
} else if (hora == 1) {
    good.innerHTML = `Bom dia! É ${hora}:${min} nesse exato momento.`
    img.src = 'manha.png'   
    document.body.style.background = '#5d7e8c'

} else if (hora >= 12 && hora < 18) {
    good.innerHTML = `Boa tarde! São ${hora}:${min} nesse exato momento.`
    img.src = 'tarde.png'
    document.body.style.background = '#eebc10'

} else {
    good.innerHTML = `Boa noite! São ${hora}:${min} nesse exato momento.`
    img.src = 'noite.png'
    document.body.style.background = '#284047'
}   
}