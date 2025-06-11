export default function Automoveis({carro}){
    return(
        <div className="cars">
            <h4>{carro.modelo} : {carro.ano}</h4>
        </div>
    )
}