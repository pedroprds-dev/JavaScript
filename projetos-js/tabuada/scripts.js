function calcular() {
    let txtn = document.querySelector('#num')
    let txtn2 = document.querySelector('#num2')
    let tabu = document.querySelector('#seltab')

    if (txtn.value.length == 0) {
        alert('[ERRO] Digite um número.')
    } else {
        tabu.innerHTML = ''
        let n1 = Number(txtn.value)
        let n2 = Number(txtn2.value)
        for (c = 1; c <= n2; c++) {
            let item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tabu.append(item)
        }
    }

}