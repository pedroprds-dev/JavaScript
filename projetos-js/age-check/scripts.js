function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtnasc = document.getElementById('born')
    var nasc = Number(txtnasc.value)
    var idade = ano - nasc
    var res = document.querySelector('div#res')
    var sex = document.getElementsByName('radsex')

    if (txtnasc.value.length == 0 || txtnasc.value >= ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var gen = ''
        var img = document.getElementById('foto')

        if (sex[0].checked) {
            var gen = 'masculino'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/foto_bebe_m.png')
            } else if (idade >= 10 && idade <= 29) {
                img.setAttribute('src', 'imagens/foto_jovem_m.png')
            } else if (idade >= 30 && idade < 60) {
                img.setAttribute('src', 'imagens/foto_adulto_m.png')
            } else {
                img.setAttribute('src', 'imagens/foto_idoso_m.png')
            }


        } else if (sex[1].checked) {
            var gen = 'feminino'
            if (idade < 10) {
                img.setAttribute('src', 'imagens/foto_bebe_f.png')
            } else if (idade >= 10 && idade <= 29) {
                img.setAttribute('src', 'imagens/foto_jovem_f.png')
            } else if (idade >= 30 && idade < 60) {
                img.setAttribute('src', 'imagens/foto_adulta_f.png')
            } else {
                img.setAttribute('src', 'imagens/foto_idosa_f.png')
            }

        } else {
            var gen = 'nãoinformado'
        }
        if (sex[0].checked || sex[1].checked) {
            res.innerHTML = `Verifiquei uma pessoa que se identifica com o gênero ${gen} e tem ${idade} anos.`   
        } else {
            res.innerHTML = `Foi detectada uma pessoa com ${idade} anos.`
        }
    }

}
