import FilaTemas from "./FilaTemas";
import TotalEjercicios from "./TotalEjercicios";
import './Temas.css'
import NombreLista from "./NombreLista";

export default function Temas(props){

    

    return(
        <>
        <ul>
            <NombreLista tema={props.tema}></NombreLista>
            <ol>
                <FilaTemas tema={props.tema}></FilaTemas>
            </ol>
            <TotalEjercicios tema={props.tema}></TotalEjercicios>
        </ul>
        
            
        
        
        </>

    )

}