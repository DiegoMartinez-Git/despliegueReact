import Tema from './Temas'

export default function FilaTemas(props){

    

    return(
        <>
        {props.tema.parts.map(part => (
            <li key={part.id}>
                <strong>{part.name}</strong> Ejercicios: {part.exercises}
            </li>
        ))}
        </>
                
           
    )
}