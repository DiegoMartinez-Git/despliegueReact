export default function BotonNotas(props){
    //Las props nos daran el mock de notas
    function mostrarImportantes(notas){
        console.log(notas)
    }
    return(
        <>
            <button onClick={mostrarImportantes(props.todasLasNotas)}>Mostar importantes</button>
        </>
        
        
    )
}