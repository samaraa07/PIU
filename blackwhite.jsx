import { useEffect, useState } from 'react'
import './blackwhite.css'

function Temas() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [text, setTexto] = useState('');
  const cores = ['#FF0000', '#00FF00', '#0000FF', '#FFF800'];
  

  // esse useEffect muda o background 
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

  useEffect(() => {
    const cor = cores[text.length % cores.length];
    document.body.style.backgroundColor = cor;
  }, [text])

  return (
    <div className={`tema-constante ${modoEscuro ? 'escuro' : 'claro'} `}>
      <div className={'tema-corpo' + (modoEscuro ? 'escuro' : 'claro')}>
        <h3>Tema {modoEscuro ? 'Escuro' : 'Claro'}</h3>
        <button onClick={() => setModoEscuro(!modoEscuro)}>
          {modoEscuro ? 'Tema Claro' : 'Tema Escuro'}
        </button>
      </div>

        
      <h2>Digite algo e veja as cores mudarem!</h2>
      <input type="text" value={text} onChange={(e) => setTexto(e.target.value)} placeholder="..."/>
      <p>O que você digitou: {text}</p>
    </div>
  );

}



export default Temas;
