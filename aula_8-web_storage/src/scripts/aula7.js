/* ==========================================================
   AULA 06 & 07: EVENTOS DOM - TECHFOOD (CORRIGIDO)
   ========================================================== */

// 5. BOTÃO LIMPAR TUDO
const btnLimpar = document.querySelector('#btn-limpar');
if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
        const listaResumo = document.querySelector('#lista-resumo');
        const secaoResumo = document.querySelector('#secao-resumo'); // Corrigido: adicionado #

        listaResumo.innerHTML = ""; // Limpa a lista
        secaoResumo.style.display = 'none'; // Esconde a seção
        document.querySelectorAll('.badge-adicionado').forEach((b) => b.remove());

        while(listaResumo.firstElementChild){
            listaResumo.firstElementChild.remove()
        }

        secaoResumo.style.display = 'none'
    })
}