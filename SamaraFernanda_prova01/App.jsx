import { useState } from 'react'
import './App.css'
import ListagemCarros from './Components/ListagemCarros'
import FiltragemCarros from './Components/FiltragemCarros'
import ContadorClicks from './Components/ContadorClicks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="corpo">
        <ContadorClicks></ContadorClicks>
        <ListagemCarros></ListagemCarros>
        
        
        <h1 className='titulo'> Carros de cor VERMELHA:</h1>    
        <FiltragemCarros></FiltragemCarros>
      </div>  
    </>
  )
}

export default App













