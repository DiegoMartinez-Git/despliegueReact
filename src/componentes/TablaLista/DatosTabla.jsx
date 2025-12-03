import TotalPorcentaje from "./TotalPorcentaje";

export default function DatosTabla({datos}){
    return(
        <>
            <h1>Tabla</h1>
            <table>    
                <tbody>
                    {datos.criterios_evaluacion.map((tema) => (
                        <tr key={tema.id}>
                            <td>{tema.id}</td>
                            <td>{tema.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TotalPorcentaje tarea={datos}></TotalPorcentaje>
        </>
    )
}