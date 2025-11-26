import './App.css'
import Contador from './componentes/Contadores/Contador'
import Contador2 from './componentes/Contadores/Contador2';
import ContadorR from './componentes/Contadores/ContadorR';
import IzquierdaDerecha from './componentes/IzquiedaDerecha/IzquierdaDerecha';
import Reloj from './componentes/Segundero/Reloj';
import Segundero from './componentes/Segundero/Segundero';
import Semaforo from './componentes/Semaforos/Semaforo';
import Semaforo2 from './componentes/Semaforos/Semaforo2';
import SemaforoReduce from './componentes/Semaforos/SemaforoReduce';

function App() {
  let contador = 0;
  return (
    <div>
      {/*<Contador contador= {contador}></Contador>*/}
      {/*<Contador2></Contador2>*/}
      {/*<Semaforo2></Semaforo2>*/}
      {/*<ContadorR contador={contador}></ContadorR>*/}
      {/*<SemaforoReduce></SemaforoReduce>*/}
      {/*<IzquierdaDerecha></IzquierdaDerecha>*/}
      {/*Para poner un numero tiene que ser entre llaves*/}
      {/*<Segundero contador = {0}></Segundero>*/}
      <Reloj></Reloj>
    </div>
  )
}

export default App
