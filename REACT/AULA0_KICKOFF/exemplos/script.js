// Orientação a Objeto
class Prato {
    constructor(nome, preco, categoria){
        this.nome = nome,
        this.preco = preco,
        this.categoria = categoria
    }
    //Método: Tem a função de fazer uma ação dentro da classe.
    formatarPreco(preco){
        return `R$${this.preco.toFixed(2).replace('.', ',')}`
        //Replace(): substitui o '.' por ','
    }
    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual / 100)
    }
}
const cardapio = [
    new Prato('Feijoada Completa', 42.90, 'Prato Principal'),
    new Prato('Parmegiana de Carne', 29.90, 'Prato Principal'),
    new Prato('Cookie Nutella', 10.00, 'Sobremesas'),
    new Prato('Açai Supremo', 25.90, 'Sobremesas'),
    new Prato('Suco de Manga', 8.90, 'Bebidas'),
    new Prato('Coca-Cola', 5.00, 'Bebidas')
]
console.log('=== Pratos Criados ===')
cardapio.forEach(p => {
    console.log(`${p.nome} -> ${p.formatarPreco()}`)
})

// DOM
const containerCardapio = document.querySelector('#cardapio')

function criarCardPrato(prato){
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = 
    `
        <h3>${prato.nome}</h3>
        <span class='categoria'>${prato.categoria}</span>
        <div class='preco'>${prato.formatarPreco()}</div>
    `
    card.addEventListener('click', () => {
        alert(
            `🍽️ ${prato.nome} \n` + 
            `Categoria: ${prato.categoria} \n` + 
            `Preço: ${prato.formatarPreco()}`
        )
    })
    
    return card
}

function renderizarCardapio(){
    containerCardapio.innerHTML = ''

    cardapio.forEach(prato => {
        const card = criarCardPrato(prato)
        containerCardapio.appendChild(card)
    })
}

renderizarCardapio()

// cardapio.forEach(prato => {
//     prato.aplicarDesconto(20);
// })

cardapio[0].aplicarDesconto(20);
renderizarCardapio();

//Exercício 1 
class Bebida {
    constructor(nome, preco, volume){
        this.nome = nome,
        this.preco = preco
        this.volume = volume
    }
    descricao(){
        return `${this.nome} - ${this.volume}ml - R$${this.preco.toFixed(2).replace('.', ',')}`
    }
    emLitros(){
        this.volume = this.volume / 1000
        return `${this.volume.toFixed(2)}L`
    }
}

const bebidas = [
    new Bebida('Coca-Cola Zero', 5.99, 500),
    new Bebida('Suco de Laranja', 8.99, 400)
]

console.log('=== Bebidas Criadas ===')
bebidas.forEach(b => {
    console.log(b.descricao())
})

//Exercício 2
console.log('=== Bebidas em Litros ===')
bebidas.forEach(b => {
    console.log(b.emLitros())
})

//Exercício 3 e 4
function criarListaBebidas(){
    const listaBebidas = document.createElement('div')
    listaBebidas.id = 'lista-bebidas'

    bebidas.forEach(b => {
        const card = document.createElement('div');
        card.className = 'card';

        card.textContent = b.descricao();

        card.addEventListener('click', () => {
            alert(`Volume em litro: ${bebida.emLitros()}`)
        })

        listaBebidas.appendChild(card);
    })
}

//Exercício 5 
