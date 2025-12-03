import TotalPorcentaje from "./TotalPorcentaje";

export default function DatosLista({datos}){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                {datos.criterios_evaluacion.map((tema) => (
                    <li key={tema.id}>{tema.id}-{tema.descripcion}</li>
                ))}
            </ul>
            <TotalPorcentaje tarea={datos}></TotalPorcentaje>
        </>
    )
}