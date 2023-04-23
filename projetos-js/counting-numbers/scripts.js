function contar() {
var res = document.getElementById('res')
var txti= document.getElementById('inicial')
var txtf= document.getElementById('final')
var txtp= document.getElementById('passo')

res.innerHTML = ''    
if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
    window.alert('[ERRO] Faltam dados.')
} else{
    var i = Number(txti.value)
    var f = Number(txtf.value)
    var p = Number(txtp.value)
    if (p==0){
        res.innerHTML = 'Impossível contar. Considerarando intervalo como 1'
    }

    if (i<f) {
        for (var c = i ; c <= f ; c += p) {
            res.innerHTML += `${c} \u{27A1} `
        }
    } else {
        for (var c = i ; c >= f ; c -= p) {
            res.innerHTML += `${c} \u{27A1} `
        }
    }
}   
}

