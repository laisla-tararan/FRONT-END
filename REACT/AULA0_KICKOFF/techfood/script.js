class Prato {
    constructor(nome, preco, categoria){
        this.nome = nome,
        this.preco = preco,
        this.categoria = categoria
    }
    //Método: Tem a função de fazer uma ação dentro da classe.
    formatarPreco(preco){
        return `R$${this.preco.toFixed(2).replace('.', ',')}`
        //Replace(): substitui o '.' por ','
    }
    aplicarDesconto(percentual){
        this.preco = this.preco * (1 - percentual / 100)
    }
}
const Prato = [
    new Prato('Feijoada Completa', 42.90, 'Prato Principal'),
    new Prato('Parmegiana de Carne', 29.90, 'Prato Principal'),
    new Prato('Cookie Nutella', 10.00, 'Sobremesas'),
    new Prato('Açai Supremo', 25.90, 'Sobremesas'),
    new Prato('Suco de Manga', 8.90, 'Bebidas'),
    new Prato('Coca-cola', 5.00, 'Bebidas')
]