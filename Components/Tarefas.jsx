import './Tarefas.css'
import Tarefas from './Components/Tarefas'
import { useState } from 'react';

export default function Tarefas() {
  const [tarefa, setTarefa] = useState('')
  const [lista, setLista] = useState([])

        const handleSubmit = () => {
            e.preventDefault
        }

        const handleClear = () => {
            
        }

  return (
    <div>
      <h3>Minhas Tarefas</h3>

      <form onSubmit={handleSubmit}>
        <label>
            <input type="text" onChange={(e) => setTarefa(e.target.value)} value={tarefa}/>
        </label>
        <p>{tarefa}</p>

        <input type="submit" />

      </form>
      <button onClick={handleClear}>Reset</button>

      <ul>
        {lista.map(item) => (
            <li>{item}</li>
        )}
      </ul>
    </div>
  );
}
