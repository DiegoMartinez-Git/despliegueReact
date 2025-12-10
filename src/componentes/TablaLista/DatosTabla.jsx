import RegistroTabla from "./RegistroTabla";
import TotalPorcentaje from "./TotalPorcentaje";

export default function DatosTabla({datos}){

    function mostrarDatos(registro){
        return(<RegistroTabla key={registro.id} tema={registro}></RegistroTabla>)
    }
    return(
        <>
            <h1>Tabla</h1>
            <table>    
                <tbody>
                    {datos.criterios_evaluacion.map(mostrarDatos)}
                </tbody>
            </table>
            <TotalPorcentaje tarea={datos}></TotalPorcentaje>
        </>
    )
}