export default function TotalPorcentaje({tarea}){

    

    return(
        <p>Porcentaje:{tarea.criterios_evaluacion.reduce((sum, part) => sum + parseInt(part.peso_porcentaje), 0)}%</p>
    )
}