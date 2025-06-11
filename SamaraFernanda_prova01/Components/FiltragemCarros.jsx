import { automovel } from "../dadosCarros"

export default function FiltragemCarros(){
    const carrosVermelhos = automovel.filter(carro => carro.cor === "vermelho")

    return(
        <div className="vermelhos">
            {carrosVermelhos.map(carroVermelho => (  <h1>{carroVermelho.modelo}</h1>
            ))}
        </div>
    )
}