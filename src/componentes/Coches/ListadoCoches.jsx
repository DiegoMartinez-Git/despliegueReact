import Coche from "./Coche"
import './ListadoCoches.css'

export default function ListadoCoches(props){

    function crearCoche(miCoche){
        return <Coche key = {miCoche.matricula} coche={miCoche}></Coche>
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Matrícula</th>
                    <th>Color</th>
                    <th>Nº Puertas</th>
                </tr>
            </thead>
            <tbody>
                {props.todosLosCoches.map(crearCoche)}
            </tbody>
        </table>
    )
}