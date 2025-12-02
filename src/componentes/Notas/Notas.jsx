import BotonNotas from "./BotonNotas";

export default function Notas(){
    function mostrarImportantes(notas){
        console.log(notas)
    }
    return(
        <>
            <h1>Notas</h1>
            <BotonNotas ></BotonNotas>
        </>
    )
}