import Tema from './Temas'

export default function ListadoMisTemas(props){
    

    function crearTema(temita){
        return <Tema key = {temita.id} tema={temita}></Tema>
    }

    return(
        <>
        {console.log(props.todosLosTemas)}
            {props.todosLosTemas.map(crearTema)}
        </>     
    )
}