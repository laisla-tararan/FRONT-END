//1
console.log('Largura da Janela:',window.innerWidth)
console.log('Texto atual da aba:', document.title)

//2
const tituloPortal = document.querySelector('#titulo-portal')

tituloPortal.textContent = "EcoCycle - Notícias Sustentáveis"
tituloPortal.style.color = '#c7fac7'

//3
const firstCard = document.querySelector('.card-noticia:nth-of-type(1)')
firstCard.classList.add('noticia-destaque')

//4
const img = document.querySelector('#thumb-video')

img.alt = 'Clique para assistir sobre Energia Solar'
img.src = 'src/images/mudar-imagem.jpg'

//5
const bt = document.querySelectorAll('.btn-leitura')
console.log(`O portal EcoCycle possui ${bt.length} notícias disponíveis.`)