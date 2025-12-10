import './App.css'
//-----------------COMPONENTES-----------------
import BarraHerramientas from './componentes/BotonesTemas/BarraHerramientas';
import Contador from './componentes/Contadores/Contador'
import Contador2 from './componentes/Contadores/Contador2';
import ContadorR from './componentes/Contadores/ContadorR';
import IzquierdaDerecha from './componentes/IzquiedaDerecha/IzquierdaDerecha';
import Reloj from './componentes/Segundero/Reloj';
import Segundero from './componentes/Segundero/Segundero';
import Semaforo from './componentes/Semaforos/Semaforo';
import Semaforo2 from './componentes/Semaforos/Semaforo2';
import SemaforoReduce from './componentes/Semaforos/SemaforoReduce';
import ListadoCoches from './componentes/Coches/ListadoCoches';


//-----------------CONTEXTOS-----------------
import TemaContext from './contextos/TemaContext';

//-----------------MOCKS-----------------
import temas from './mocks/mock-temas';
import losCoches from './mocks/mock-coches';
import losTemas from './mocks/mock-misTemas';
import lasNotas from './mocks/mock-notas'
import ListadoMisTemas from './componentes/ListaTemas/ListaMisTemas';
import Notas from './componentes/Notas/Notas';
import GestionarTabla from './componentes/TablaLista/GestionarTabla';
import CocheForm from './componentes/CocheForm/CocheForm';
import { useState } from 'react';


function App() {
  const [listaCoches, setListaCoches] = useState(losCoches)

  //Recibe un coche y lo añade a la lista de coches
  function manejarFormulario(coche){
    setListaCoches([...listaCoches, coche])
  }

  function validarMatricula(matricula){

    const matriculas = listaCoches.map((coche)=> coche.matricula)
    console.log(matriculas)

    const EXISTE = matriculas.includes(matricula)

    console.log(EXISTE)

    
  }

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
      {/*<Reloj></Reloj>*/}
      {/*<TemaContext.Provider value={temas.light}>
        <BarraHerramientas></BarraHerramientas>
      </TemaContext.Provider>*/}
      <ListadoCoches todosLosCoches={listaCoches}></ListadoCoches>

      {/**
       * Recibe la funcion por props(parametro y la ejecuta en el handle
       */}
      <CocheForm manejarFormulario = {manejarFormulario}
                  validarMatricula={validarMatricula}></CocheForm>
      
      {/* <ListadoMisTemas todosLosTemas={losTemas}></ListadoMisTemas>
      <Notas notasIniciales={lasNotas}></Notas> */}
      {/* <GestionarTabla></GestionarTabla> */}
      
    </div>
  )
}

export default App
