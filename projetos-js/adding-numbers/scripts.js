let num = document.querySelector('#number')
let selnum = document.querySelector('#selnum')
let res = document.querySelector('#res')
let arnum = []

function isnumber (n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function outlist (n, l) {
    if (l.indexOf(Number(n)) === -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if (isnumber(num.value) && outlist(num.value, arnum)) {
        arnum.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O número ${num.value} foi adicionado`
        selnum.append(item)

    } else {
        alert('[ERRO] Digite apenas números entre 1 e 100 e que ainda não foram adicionados')
    }
}

function finalizar() {
    if (arnum.length == 0) {
        alert('[ERRO] Não é possível finalizar sem adicionar nenhum valor')
    } else {
    let ind = arnum.length
    let soma = 0
    let mult = 1
    let maior = arnum[0]
    let menor = arnum[0]
    /**for (let c=0; c<ind; c++) {
        soma += arnum[c]
    } posso usar da forma abaixo*/
    for (let pos in arnum) {
        mult *= arnum[pos]
        soma += arnum[pos]
        if (arnum[pos] > maior)
            maior = arnum[pos]

        if (arnum[pos] < menor)
            menor = arnum[pos]
    }
    
    res.innerHTML = `<p>Existem ${ind} valores diferentes adicionados</p>`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${soma/ind}</p>`
    res.innerHTML += `<p>O maior valor inserido é ${maior}</p>`
    res.innerHTML += `<p>O menor valor inserido é ${menor}</p>`
    res.innerHTML += `<p>O produto de todos os valores é ${mult}</p>`
    }
}