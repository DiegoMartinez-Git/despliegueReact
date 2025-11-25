import './App.css'
import Contador from './componentes/Contador'
import Contador2 from './componentes/Contador2';
import ContadorR from './componentes/ContadorR';
import Semaforo from './componentes/Semaforo';
import Semaforo2 from './componentes/Semaforo2';

function App() {
  let contador = 0;
  return (
    <div>
      {/*<Contador contador= {contador}></Contador>*/}
      {/*<Contador2></Contador2>*/}
      {/*<Semaforo2></Semaforo2>*/}
      <ContadorR contador={contador}></ContadorR>
    </div>
  )
}

export default App
