document.addEventListener('DOMContentLoaded', () => {
    inicializarHoverCards()
    inicializarVitrine()
})

function inicializarHoverCards(){ //amplia os cards ao entrar com o mouse.
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
}

function inicializarVitrine(){
    const main = document.querySelector("main");

    if(!main) return //se o main não existir, encerra a função.

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
                const preco = card.querySelector(".preco").textContent;

                // Feedback Visual
                const textoOriginal = clicado.textContent;
                clicado.textContent = "Adicionado 🥳";
                clicado.style.backgroundColor = "#27ae60";
                clicado.disabled = true; // Corrigido: .disabled - desativa temporariamente que o usuário fique spanando cliques.

                setTimeout(() => {
                    clicado.textContent = textoOriginal;
                    clicado.style.backgroundColor = ""; //faz ele voltar ao que era padrão no css.
                    clicado.disabled = false;
                }, 1500);

                 const badgeExistente = card.querySelector(".badge-adicionado")

                if(badgeExistente) badgeExistente.remove()
                    card.insertAdjacentHTML("beforeend", "<span class='badge-adicionado'> 🥳 no resumo </span>");
        
                setTimeout(function(){
                    const badge = card.querySelector(".badge-adicionado")
                    if(badge) badge.remove()
                }, 2000)

                //resetar a quantidade de itens (novo)
                const box = card.querySelector('.quantidade-box')

                if(box){ //senão tem o box, não irá fazer nada, mas se existir vamos fazer o reset.
                    box.querySelector('.qtd-valor').textContent = '1'
                    atualizarPrecoCard(box)
                }

                //acionar ação de salvarPedido()
                salvarPedido({ nome: nomePrato, preco: preco, qtd: quantidade });
                atualizarContadorPedidos()
            }
        });
    }
}

function atualizarPrecoCard(box) {

    // Pega o card completo (pai do elemento "prato")
    const card = box.parentElement

    // Seleciona o elemento onde o preço é exibido
    const spanPreco = card.querySelector('.preco')

    // Pega o preço unitário armazenado no atributo data-preco
    const precoUnitario = parseFloat(
        spanPreco.getAttribute('data-preco')
    )

    // Pega a quantidade atual e converte para número
    const quantidade = Number(
        prato.querySelector('.qtd-valor').textContent
    )

    // Calcula o total (preço unitário * quantidade)
    const total = precoUnitario * quantidade

    // Atualiza o texto do preço no formato brasileiro (R$ 0,00)
    spanPreco.textContent =
        "R$" + total.toFixed(2).replace('.', ',')

    // Muda a cor do preço dependendo do valor total
    // Se for maior que 150 → dourado
    // Caso contrário → laranja
    spanPreco.style.color =
        total > 150 ? "#c0892b" : "#e67e22"
}

function salvarPedido(pedido){
    //Leu
    const lista = JSON.parse(localStorage.getItem('techfood_pedidos') || '[]')

    //Modificou
    pedido.subtotal = pedido.preco * pedido.qtd
    lista.push(pedido) //adiciona a lista.

    //Salvou
    localStorage.setItem('techfood_pedidos', JSON.stringify(lista)) //adiciona ao localStorage.
}

function atualizarContadorPedidos(){
    
}