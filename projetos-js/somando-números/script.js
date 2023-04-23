var bt = document.querySelector('input#bt')
        bt.addEventListener('mouseenter', enter)
        bt.addEventListener('click', somar)
        bt.addEventListener('mouseout', out)

        function somar() {
            var tn1 = document.querySelector('input#txtn1')
            var tn2 = document.querySelector('input#txtn2')
            var res = document.getElementById('res')
            var n1 = Number(tn1.value)
            var n2 = Number(tn2.value)
            var s = n1 + n2
            res.innerHTML = `Resultado: ${s}` 
            bt.style.background = 'bisque'
            bt.style.color = 'black'    
        }
        
        function enter() {
            bt.style.background = 'black'
            bt.style.color = 'bisque'
        }

        function out() {
            bt.style.background = 'bisque'
            bt.style.color = 'black'
        }