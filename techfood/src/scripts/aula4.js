class Prato {
    constructor(nome, preco){
        this.nome = nome,
        this.preco =preco
    } 
    exibirComoMoeda(total){
        return 'R$' + total.toFixed(2)
    }
}
const lasanha = new Prato('Lasanha à Bolonhesa', 45.00)

alert('Seja Bem-Vindo ao restaurante Sabor&Saber!') //aparece na tela quando abrimos
console.log("teste")

const cliente = prompt('Bem vindo, cliente. Para um atendimento personalizado, digite seu nome:') //mostra a mensagem para inserir algum dado.

let nomeFormatado = cliente.trim().toUpperCase() //variavel que formata o nome.

alert(`Bem vindo, ${nomeFormatado}`) //mostra a mensagem na tela junto com o nome formatado.

const agora = new Date()

const hora = agora.getHours()

if(hora < 11 ) {
    alert(`Bom dia, ${nomeFormatado}, aproveite as delícias do café da manhã!`)
    console.log('Antes da 11h')
} else {
    alert(`Boa tarde, ${nomeFormatado}, aproveite as iguarias do almoço!`)
    console.log('Após as 11h.')
}

const querPrato = confirm(`Olá querido(a) ${nomeFormatado}, dê sua nota para o prato escolhido da casa!`)

if(querPrato){
    let quantidade = prompt('Este é uma boa escolha, vai querer quantas unidades?')
    let total = lasanha.preco * quantidade
    //alert(`O total da sua compra será: R$${total.toFixed(2)}`)
    alert(`Bacana, o seu total de ${lasanha.nome} é de: ${lasanha.exibirComoMoeda(total)}`)
} else {
    alert('Obrigada e até logo!')
}


