import { useState } from 'react'

export default function ContadorClicks(){
    const [count, setCount] = useState(0)
// Aqui a função dos CLICKS vai fazer a contagem por meio das condicionais, quando chegar no numero 10 o botao ficará verde. O mesmo processo acontecerá com o outro, porem com numero negativo.
    if (count > 10){ 
        document.getElementsByClassName("maior")[0].style.backgroundColor = 'green';
    };

    if (count < 0){
        document.getElementsByClassName("menor")[0].style.backgroundColor = 'blue';
    }

    return(
    <div className="card">
        <button onClick={() => setCount((count) => count + 1)} className='maior'> + </button>
        
        <h2>{count}</h2>

        <button onClick={() => setCount((count) => count - 1)} className='menor'> - </button>
    </div>
    )
}
