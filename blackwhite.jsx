import { useEffect, useState } from 'react'
import './blackwhite.css'

function Temas() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [name, setName] = useState;
  
  useEffect(() => {
    if (modoEscuro) {
        document.body.classList.add('modo-escuro');
        document.body.classList.remove('modo-claro');
    }
    else {
        document.body.classList.add('modo-claro');
        document.body.classList.remove('modo-escuro');
    }
  }, [modoEscuro]) 

  return (
    <div className={'tema-corpo' + (modoEscuro ? 'escuro' : 'claro')}>
      <h3>Tema {modoEscuro ? 'Escuro' : 'Claro'}</h3>
      <button onClick={() => setModoEscuro(!modoEscuro)}>
        {modoEscuro ? 'Tema Claro' : 'Tema Escuro'}
      </button>
    </div>
  )

}

export default Temas;
