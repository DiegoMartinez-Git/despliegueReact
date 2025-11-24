import './App.css'
import Contador from './componentes/contador'

function App() {
  let contador = 0;
  return (
    <div>
      <p>Ejemplo de useState</p>
      <Contador contador= {contador}></Contador>
    </div>
  )
}

export default App
