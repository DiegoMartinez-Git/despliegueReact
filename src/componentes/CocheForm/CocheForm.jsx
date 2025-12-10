import { useForm, Watch } from "react-hook-form"

export default function CocheForm(){
    
    const COCHE = {
        //Lo mismo que tengamos declarado en el mock
        MODELO      : "modelo",
        MATRICULA   : "matricula",
        COLOR       : "color",
        PUERTAS     : "npuertas"

    }

    function manejarFormulario(event){
        console.log("Coche insertado")

        event.preventDefault()
    }

    const COCHEINICIAL = {
        modelo      : "",
        matricula   : "",
        color       : "",
        npuertas    : 1
    }

    const { register, 
            handleSubmit,
            reset,
            formState:{errors},
            watch



    } = useForm({defaultValues: COCHEINICIAL});
    
    return(

        <>

            <form id="formulario">
                <p><strong>Nuevo Vehiculo</strong></p>

                <label htmlFor={COCHE.MODELO}>Modelo</label><br />
                <input type="text" id={COCHE.MODELO} /><br /><br />

                <label htmlFor={COCHE.MATRICULA}>Matrícula</label><br />
                <input type="text" id={COCHE.MATRICULA} /><br /><br />

                <label htmlFor={COCHE.COLOR}>Color</label><br />
                <input type="text" id={COCHE.COLOR} /><br /><br />

                <label htmlFor={COCHE.PUERTAS}>Nº Puertas</label><br />
                <input type="number" id={COCHE.PUERTAS} min={0}/><br /><br />

                <button onClick={manejarFormulario}>Añadir Coche</button>

            </form>

        </>

    )
}