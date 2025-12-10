import { useState } from "react"
import DatosTabla from "./DatosTabla"
import DatosLista from "./DatosLista"
import Datos from "../../mocks/mock-tarea"

export default function GestionarTabla(){
    
    const [estado, setEstado] = useState({estado: 0})//0: sin datos, 1: con tabla, 2:con lista

    function mostrarTabla(){
        setEstado({estado: 1})
    }

    function mostrarLista(){
        setEstado({estado: 2})
        console.log(Datos)
    }

    function Resetear(){
        setEstado({estado:0})
    }

    return(
        <>
            <button onClick={mostrarTabla}>Mostrar tabla</button>
            <button onClick={mostrarLista}>Mostrar lista</button>
            <button onClick={Resetear}>Resetear</button>
            
            {estado.estado === 1 && <DatosTabla datos={Datos}/>}
            {estado.estado === 2 && <DatosLista datos={Datos}/>}
        
        </>

    )
}