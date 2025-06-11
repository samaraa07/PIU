import { automovel } from '../dadosCarros'
import Automoveis from './Automoveis'
// Para que a listagem seja feita, é necessário importar as funções acima que correspondem aos elementos dos carros, como ano, modelo e cor.

export default function ListagemCarros(){
    return( 
        <div className="listcar">
            {automovel.map(carro => (
                <div key={carro.id}>
                    <Automoveis carro={carro}></Automoveis>
                </div>
            ))}
        </div>
    )
}

// Na linha 8 é realizado o mapeamento dos dados dos carros e dentro dele tem a children que puxa por uma chave os ids dos mesmos para que s4ejam renderizados.
