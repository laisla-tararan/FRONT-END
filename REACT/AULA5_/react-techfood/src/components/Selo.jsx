export default function Selo ({texto, tipo = 'padrão'}){
    return <span className={`selo selo-${tipo}`}>{texto}</span>
}