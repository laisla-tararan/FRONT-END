// Exercício 1 - Personalizador de Acesso (Strings e Interação)
// const saudacao = alert('Olá, seja bem-vindo!')
// const nome = prompt('Insira seu nome:')
// const sobrenome = prompt('Insira seu sobrenome:')

// let userFinal = nome.concat(sobrenome)

// let userMinusculas = userFinal.toLowerCase().trim()
// alert(`Certo, seu nome em letras minúsculas é: ${userMinusculas}`)

// let userCaracteres = userFinal.length
// alert(`Certo, seu nome tem: ${userCaracteres} caracteres.`)

// Exercício 2 - Calculadora de Divisão de Conta (Aritméticos)
// const total = prompt('Olá, sejam bem-vindos ao Restaurante Amigos em Dia! Digite o valor total da sua conta:')
// const quantidade = prompt('Digite o total de pessoas na mesa:')

// let divisao = total / quantidade 

// alert(`A conta ficou no valor de R$${divisao.toFixed(2)} por pessoa.`)

// Exercício 3 - Validador de Promoção (Lógicos e Relacionais)
// const valor = prompt('Olá, digite o valor de sua compra (acima de R$150,00 o frete é grátis):')
// const temCupom = prompt('Tem algum cupom de frete grátis? obs: sim ou não em letras minúsculas.')

// if((valor > 150) || (temCupom == 'sim')) {
//     console.log('Frete Grátis Liberado!')
// } else {
//     console.log('Frete Pago.')
// }

// Exercício 4 - Sorteador de Brindes (Math)
// const numUsuario = prompt('Olá, seja bem-vindo ao Sorteio da Sorte!, digite um número de 1 a 10, e veremos se ganhará o brinde:')

// const numeroSorteado = Math.floor(Math.random() * 10) + 1; 

// if((numUsuario == numeroSorteado)){
//     alert(`Parabéns, você ganhou o brinde!`)
// } else {
//     alert(`Que pena, o número sorteado foi ${numeroSorteado}`)
// }

// Exercício 5 - Gestão de Frota (Orientação a Objetos)
// alert('Olá, seja bem-vindo ao nosso site!')

// const ano_atual = Number(prompt('Digite aqui o ano atual para calcularmos a idade do carro:'))
// class Veiculo {
//     constructor(modelo, marca, ano) {
//         this.modelo = modelo,
//         this.marca = marca,
//         this.ano = ano
//     }

//     idadeVeiculo(ano_atual){
//         const idade = ano_atual - this.ano
//         return `A idade do seu carro é: ${idade}`
//     }
// }
// const veiculo = new Veiculo ('Nivus', 'Volkswagem', 2021)
// alert(veiculo.idadeVeiculo(ano_atual))
