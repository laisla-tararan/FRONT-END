document.addEventListener('DOMContentLoaded', () => { //garante que as funções aqui dentro, sejam executadas apenas depois de carregar ou que existam realmente.
    exibirBoasVindas()
})

function exibirBoasVindas(){
    // 1. SAUDAÇÃO DINÂMICA
    const saudacao = document.querySelector("#boas-vindas");
    const hora = new Date().getHours();
    if (saudacao) {
        saudacao.textContent = hora < 12 
            ? "Bom dia! Qual o seu pedido?" 
            : "Boa tarde! Confira nosso cardápio.";
    }
}