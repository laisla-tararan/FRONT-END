import { useState } from "react"

function CardPrato({ nome, preco, categoria, descricao, onAdicionar }){
    const [quantidade, setQuantidade] = useState(1)
    const [mostrarDescricao, setMudarDescricao] = useState(false)
    const [curtidas, setCurtidas] = useState(0)
    
    const handleCurtir = () => {
        setCurtidas(curtidas + 1);
    };
    const precoFormatado = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    function diminuir(){
        if(quantidade > 1){
            setQuantidade(quantidade - 1)
        }
    }

    function aumentar(){
        if (quantidade < 10){
            setQuantidade(quantidade + 1)
        }
    }

    function adicionar(){
        onAdicionar(quantidade)
        setQuantidade(1)
    }

    function toggleDescricao(){
        setMudarDescricao(!mostrarDescricao)
    }

    return (
        <article className="card-prato">
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>
            {mostrarDescricao && <p className="descricao">{descricao}</p>}
            <p className="preco">{precoFormatado}</p>
            <div className="quantidade">
                <button type="button" onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>-</button>
                <span>{quantidade}</span>
                <button type="button" onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>+</button>
            </div>
            <button type="button" className="btn-adicionar" onClick={adicionar}>Adicionar ao Pedido</button>
            <button 
                onClick={handleCurtir}
                className="btn-secundario"
            >
                ❤️ Curtir ({curtidas})
            </button>
            <button type="button" className="btn-secundario" onClick={toggleDescricao}>{mostrarDescricao ? "Esconder descrição" : "Ver descrição"}</button>
        </article>
    )
}

export default CardPrato