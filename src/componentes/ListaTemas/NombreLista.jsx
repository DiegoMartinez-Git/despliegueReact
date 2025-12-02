import FilaTemas from "./FilaTemas";
import TotalEjercicios from "./TotalEjercicios";
import './Temas.css'

export default function NombreLista(props){


    return(
            <li>{props.tema.name}</li>


    )

}