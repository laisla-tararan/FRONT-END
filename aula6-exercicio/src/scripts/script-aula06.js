//1
const btn = document.querySelector('#btn-curtir')
const contador = document.querySelector('#contador')
let contar = 0

btn.addEventListener('click', function () {
    contar++
    contador.innerText = contar
})

//2
const campo = document.querySelector('#campo-texto')

campo.addEventListener('keyup', function (){
    let texto = campo.value()
    console.log(texto)
})

//3
const card = document.querySelector('#caixa-cor')

card.addEventListener('mouseenter', function(){
    card.style.backgroundColor = 'blue'
})
card.addEventListener('mouseleave', function(){
    card.style.backgroundColor = 'gray'
})

//4 - extra
const reset = document.querySelector('#btn-reset')

reset.addEventListener('click', function(){
    contar = 0,
    contador.innerText = 0
    texto.innerText = ''
})