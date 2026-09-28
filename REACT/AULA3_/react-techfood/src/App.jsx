import Header from "./components/Header";
import CardPrato from "./components/CardPrato";
import Footer from "./components/Rodape";

const cardapio = [
    {
        id: 1,
        nome: "Feijoada",
        preco: 42.9,
        categoria: "Prato Principal",
        descricao: 'Uma delícia.'
    },

    {
        id: 2,
        nome: "Moqueca",
        preco: 49.9,
        categoria: "Prato Principal",
        descricao: 'Uma delícia.'
    },

    {
        id: 3,
        nome: "Pudim",
        preco: 15.9,
        categoria: "Sobremesa",
        descricao: 'Uma delícia.'
    },

    {
        id: 4,
        nome: "Brownie com Sorvete",
        preco: 13.9,
        categoria: "Sobremesa",
        descricao: 'Uma delícia.'
    },

    {
        id: 5,
        nome: "Torta Cookies com Nutella",
        preco: 20.9,
        categoria: "Sobremesa",
        descricao: 'Uma delícia.'
    },
];

function App() {
    return (
        <main className="app">
            <Header />
            <section className="cardapio">
                {cardapio.map((prato) => (
                    <CardPrato
                        key={prato.id}
                        nome={prato.nome}
                        preco={prato.preco}
                        categoria={prato.categoria}
                        descricao={prato.descricao}
                    />
                ))}
            </section>
            <Footer />
        </main>
    );
}

export default App