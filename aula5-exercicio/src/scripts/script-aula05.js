const nome = document.getElementById('nome-usuario')
nome.innerHTML = "<strong> Laisla Tararan </strong>" //muda o que ta no HTML

const img = document.querySelector('#foto-perfil')
img.src = 'src/images/perfil.jpg'

const container = document.querySelector('#container-perfil')
container.style.backgroundColor = '#E697BA'

const badgeStatus = document.querySelector('#badge-status')
badgeStatus.classList.add('.online')
badgeStatus.textContent = 'Status: Ativo'

const skills = document.querySelectorAll('.skill')
console.log(`O usuário possui: ${skills.length} skills no total.`)