import RegistroLista from "./RegistroLista";
import TotalPorcentaje from "./TotalPorcentaje";

export default function DatosLista({datos}){

    function mostrarDatos(registro){
        return(<RegistroLista key={registro.id} tema={registro}></RegistroLista>)
    }
    return(
        <>
            <h1>Lista</h1>
            <ul>
                {datos.criterios_evaluacion.map(mostrarDatos)}
            </ul>
            <TotalPorcentaje tarea={datos}></TotalPorcentaje>
        </>
    )
}