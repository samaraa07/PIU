import './App.css'
import Temas from './Components/blackwhite'

function App() {
  
  return (
    <>
      {<blackwhite/>}
      <Temas/>
    </>

  )

}

export default App

// const [name, setName] = useState("samara");
//   const [number, setNumber] = useState(1);

//   console.log(name);

//   const changeNumber = () => {
//     setNumber ( number + 1)
//   }

//   return (
//     <div className="App">
//       <h3>Meu nome é: {name}</h3>
      
//       <input 
//         type="text"
//         value = {name}
//         onChange={(e) => setName(e.target.value)} 
//       />

//       <div>
//         <p>Número: {number}</p>
//         <button onClick={changeNumber}>Mudar número!</button>
//       </div>
//     </div>
//   );

// useEFFECT - vai fazer algo a partir de uma ação diparada
// é necessário para buscar dados, configurar assinaturas, manipular o DOM manualmente
// e executar código quando o componente é montado, atualizado ou desmontado

 