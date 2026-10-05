import { useState } from "react"
import Selo from './Selo'

function CardPrato({ nome, preco, categoria, descricao, vegetariano = false, destaque = false, disponivel = true, onAdicionar }){
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
        <article className={destaque ? 'card-prato destaque' : 'card-prato'}>
            <span className="categoria">{categoria}</span>
            <h2>{nome}</h2>
            <div className="selos">
                {destaque && <Selo texto="Destaque" tipo="destaque"/>}
                {vegetariano && <Selo texto="Vegetariano" tipo="veg"/>}
                {!disponivel && <Selo texto="Esgotado"/>}
            </div>
            {mostrarDescricao && <p className="descricao">{descricao}</p>}
            <p className="preco">{precoFormatado}</p>
            {disponivel ? ( <>
                <div className="quantidade">
                <button type="button" onClick={diminuir} aria-label={`Diminuir quantidade de ${nome}`}>-</button>
                <span>{quantidade}</span>
                <button type="button" onClick={aumentar} aria-label={`Aumentar quantidade de ${nome}`}>+</button>
                </div>
                <button type="button" className="btn-adicionar" onClick={adicionar}>Adicionar ao Pedido</button>
            </>) : (<button className="btn-indisponivel" disabled> Indisponível </button>)} 
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