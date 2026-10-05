function Header({totalItens}){
    return (
        <header className="header">
            <h1> TechFood - Sabor e Saber </h1>
            <p> O sabor da Tecnologia! :D </p>
            <p className="carrinho">Itens no Pedido: {totalItens}</p>
        </header>
    )
}

export default Header