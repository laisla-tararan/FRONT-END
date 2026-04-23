/* ==========================================================
   AULA 06 & 07: EVENTOS DOM - TECHFOOD (CORRIGIDO)
   ========================================================== */

// 1. SAUDAÇÃO DINÂMICA
const saudacao = document.querySelector("#boas-vindas");
const hora = new Date().getHours();
if (saudacao) {
    saudacao.textContent = hora < 12 
        ? "Bom dia! Qual o seu pedido?" 
        : "Boa tarde! Confira nosso cardápio.";
}

// 2. INTERATIVIDADE NOS CARDS
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px)";
        card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "none";
    });
});

// 3. DELEGAÇÃO DE EVENTOS NO MAIN
const main = document.querySelector("main");

if (main) {
    main.addEventListener("click", (event) => {
        const clicado = event.target;

        // Botão Menos
        if (clicado.classList.contains("btn-menos")) {
            const prato = clicado.parentElement;
            const spanQtd = prato.querySelector('.qtd-valor');
            const valorAtual = Number(spanQtd.textContent);
            spanQtd.textContent = Math.max(1, valorAtual - 1);
            atualizarPrecoCard(prato);
            return;
        }

        // Botão Mais
        if (clicado.classList.contains("btn-mais")) {
            const prato = clicado.parentElement;
            const spanQtd = prato.querySelector('.qtd-valor');
            spanQtd.textContent = Number(spanQtd.textContent) + 1;
            atualizarPrecoCard(prato);
            return;
        }

        // Botão Pedir Agora
        if (clicado.classList.contains("btn-pedido")) {
            event.preventDefault();
            const card = clicado.closest(".card"); // Garante pegar o card pai
            const nomePrato = card.querySelector("h3").textContent;
            const quantidade = card.querySelector(".qtd-valor").textContent;
            const precoExibido = card.querySelector(".preco").textContent;

            // Feedback Visual
            const textoOriginal = clicado.textContent;
            clicado.textContent = "Adicionado 🥳";
            clicado.style.backgroundColor = "#27ae60";
            clicado.disabled = true; // Corrigido: .disabled

            setTimeout(() => {
                clicado.textContent = textoOriginal;
                clicado.style.backgroundColor = "";
                clicado.disabled = false;
            }, 1500);

            if (!card.querySelector(".badge-adicionado")) {
                card.insertAdjacentHTML("beforeend", "<span class='badge-adicionado'> 🥳 no resumo </span>");
            }

            adicionarItemAoResumo(nomePrato, quantidade, precoExibido, card);
        }
    });
}

// 4. FUNÇÕES DE SUPORTE
function atualizarPrecoCard(prato) {
    const card = prato.closest(".card");
    const spanPreco = card.querySelector('.preco');
    const precoUnitario = parseFloat(spanPreco.getAttribute('data-preco'));
    const quantidade = Number(prato.querySelector('.qtd-valor').textContent);
    
    const total = precoUnitario * quantidade;
    spanPreco.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    spanPreco.style.color = total > 150 ? "#c0892b" : "#e67e22";
}

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

