import { useState } from "react"
import Header from "./components/Header"
import SecaoCardapio from "./components/SecaoCardapio"
import Rodape from "./components/Rodape"
import { cardapio } from "./data/cardapio"
import "./App.css"

const categorias = ["Prato Principal", "Sobremesa", "Bebida"]

function App() {
  const [totalItens, setTotalItens] = useState(0)
  const [totalValor, setTotalValor] = useState(0)

  function adicionarAoPedido(quantidade, preco) {
    setTotalItens((prevItens) => prevItens + quantidade)
    setTotalValor((prevValor) => prevValor + quantidade * preco)
  }

  function limparPedido() {
    setTotalItens(0)
    setTotalValor(0)
  }

  const totalFormato = totalValor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })

  return (
    <main className="app">
      <Header totalItens={totalItens} />

      {categorias.map((categoria) => (
        <SecaoCardapio
          key={categoria}
          titulo={categoria}
          pratos={cardapio.filter((prato) => prato.categoria === categoria)}
          adicionarAoPedido={adicionarAoPedido}
        />
      ))}

      <p>Total formatado: {totalFormato}</p>
      <button type="button" className="btn-formatado" onClick={limparPedido}>
        Limpar
      </button>

      <Rodape />
    </main>
  )
}

export default App