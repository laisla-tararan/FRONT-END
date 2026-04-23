//Neste comando, o dom acessa o botão e o seu container pai e altera, sem a necessidade de selecionar o próprio.
const btnFechar = document.querySelector('.btn-leitura') 
const card = btnFechar.parentElement //seleciona o pai
// card.style.display = 'none';
//dúvida: pq neste comando, ele pegou o último article?

//Neste comando, o dom acessa os filhos da seção e mostra quais são conforme o índice requisitado pelo console.log.
const secao = document.querySelector('.lista-noticias')
const filhos = secao.children
console.log(filhos.length) //transforma os articles filhos em uma lista, logo, terão índices 'próprios' e mostra a quantidade total de cards.
console.log(filhos[2]) //mostra o article de acordo com o índice requisitado.

//Neste comando, o dom acessa o primero/último filho do elemento e altera seu destaque.
const lista = document.querySelector('.lista-noticias')
const primeiroCard = lista.firstElementChild //seleciona o primeiro.
primeiroCard.classList.add('destaque-filho')

const ultimoCard = lista.lastElementChild //seleciona o último.
ultimoCard.classList.add('destaque-filho')

const cardAtivo = document.querySelector()