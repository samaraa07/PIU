import { useEffect, useState } from 'react'
import './Colorido.css'

function Temas() {
  const [modoEscuro, setModoEscuro] = useState(false);
  const [text, setTexto] = useState('');
  const [name, setName] = useState('');
  const cores = ['#FF0000', '#00FF00', '#0000FF', '#FFF800'];

  const handleName = (e) => setName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
    };   
    useEffect(() => {
    if (name == ['azul', 'vermelho', 'verde', 'amarelo']){
        const form = document.querySelector('form');
        form.style.width = '100%';
        form.style.background = cores}}, [name]);

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
    <div>
      <div className={'tema-corpo' + (modoEscuro ? 'escuro' : 'claro')}>
        <h3>Tema {modoEscuro ? 'Escuro' : 'Claro'}</h3>
        <button onClick={() => setModoEscuro(!modoEscuro)}>
          {modoEscuro ? 'Tema Claro' : 'Tema Escuro'}
        </button>
      </div>

      <div>
            <h2>Digite as seguintes cores: Azul, Vermelho, Amarelo e Verde.</h2>
            <input type="text" value={text} onChange={(e) => setTexto(e.target.value)} placeholder="..."/>
            <form action="" method="get"></form>
            <button onClick={() => setNumber(!text)}></button>
        </div>
        
      <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="nome" onChange={handleName} value={nome} placeholder="Digite seu email"/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  );

}



export default Temas;