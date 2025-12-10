import { useForm, Watch } from "react-hook-form"
import './CocheForm.css'

export default function CocheForm(props){
    
    const COCHE = {
        //Lo mismo que tengamos declarado en el mock
        MODELO      : "modelo",
        MATRICULA   : "matricula",
        COLOR       : "color",
        PUERTAS     : "npuertas"

    }

    const COCHEINICIAL = {
        modelo      : "",
        matricula   : "",
        color       : "",
        npuertas    : 1
    }

    const { register, //Para registrar todos los campos de nuestro formulario
            handleSubmit,
            reset,//Lo ejecutamos cuando se ha hecho un submit y queremos que se reinicien los datos del formulario
            formState:{errors},
            watch //Estado del formulario en tiempo real 
        } = useForm({defaultValues: COCHEINICIAL});

    const manejarFormulario = handleSubmit((coche) => {
        props.manejarFormulario(coche)
        console.log("Coche insertado", coche)
    })

    function validarMatricula(matricula){
        props.validarMatricula(matricula)
    }
    
    return(

        <>

            <form id="formulario" onSubmit={manejarFormulario}>
                <p><strong>Nuevo Vehiculo</strong></p>

                <label htmlFor={COCHE.MODELO}>Modelo: </label>
                <input type="text" id={COCHE.MODELO}
                    {...register(COCHE.MODELO,
                        {required: {value: true,
                                    message: "El modelo del vehiculo es obligatorio"
                        }}
                    )}>
                                            {/** EL ? te dice que si existe lo muestre
                                             * y si no existe no lo muestre
                                             */}
                </input><br /><span>{errors.modelo?.message}</span><br /> <br />

                <label htmlFor={COCHE.MATRICULA}>Matrícula: </label>
                <input type="text" id={COCHE.MATRICULA}
                    {...register(COCHE.MATRICULA,
                        {required: {value:true,
                                    message: "La matricula del vehiculo es obligatoria"
                        },
                        pattern : {value : /^\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ]$/,
                                    message : "El formato de la matricula no es valido (0000-AAA)"
                        },
                        //Retocar en casa
                        validate : { validarMatricula: {value: true,
                                                    message: "La matricula ya existe"
                        }

                        }
                    }
                    )}>
                </input><br /><span>{errors.matricula?.message}</span><br /> <br />

                <label htmlFor={COCHE.COLOR}>Color: </label>
                <input type="text" id={COCHE.COLOR}
                    {...register(COCHE.COLOR,
                        {required: {value: true,
                                     message : "El color del vehiculo es obligatorio"
                        }}
                    )}>
                    

                </input><br /><span>{errors.color?.message}</span><br /><br />

                <label htmlFor={COCHE.PUERTAS}>Nº Puertas: </label>
                <input type="number" id={COCHE.PUERTAS}
                    {...register(COCHE.PUERTAS, 
                        {required : {value: true,
                                     message : "El numero de puertas del vehiculo es obligatorio"
                        },
                        min: {value: 1,
                               message: "El minimo de puertas es 1"
                        },
                        max: {value: 5,
                              message: "El maximo de puertas es 5"
                        }
                    }
                    )}>
                
                </input><br /><span>{errors.npuertas?.message}</span><br /><br />

                <button onClick={manejarFormulario}>Añadir Coche</button>
                <br />{JSON.stringify(watch())}
            </form>

        </>

    )
}