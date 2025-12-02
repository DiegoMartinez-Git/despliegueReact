import Tema from './Temas'

export default function FilaTemas(props){

    

    return(
        <>
         <p>
            Total de ejercicios en el curso:{props.tema.parts.reduce((sum, part) => sum + part.exercises, 0)}
         </p>
        </>
                
           
    )
}