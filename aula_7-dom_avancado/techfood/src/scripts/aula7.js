/* ==========================================================
   AULA 06 & 07: EVENTOS DOM - TECHFOOD (CORRIGIDO)
   ========================================================== */

// 4. FUNÇÕES DE SUPORTE

function adicionarItemAoResumo(nome, qtd, preco, cardOrigem) {
    const secaoResumo = document.querySelector("#secao-resumo");
    const listaResumo = document.querySelector("#lista-resumo");

    if (!secaoResumo || !listaResumo) return;

    secaoResumo.style.display = "block";

    const itemLi = document.createElement("li");
    itemLi.classList.add("item-resumo");

    const textoSpan = document.createElement("span");
    textoSpan.textContent = `${qtd}x ${nome} — ${preco}`;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "✕";
    btnRemover.classList.add("btn-remover");

    // Lógica de remover movida para DENTRO da função para acessar as variáveis
    btnRemover.addEventListener('click', () => {
        itemLi.remove();
        const badge = cardOrigem.querySelector('.badge-adicionado');
        if (badge) badge.remove();

        if (listaResumo.children.length === 0) {
            secaoResumo.style.display = 'none';
        }
    });

    itemLi.appendChild(textoSpan);
    itemLi.appendChild(btnRemover);
    listaResumo.appendChild(itemLi);
}

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