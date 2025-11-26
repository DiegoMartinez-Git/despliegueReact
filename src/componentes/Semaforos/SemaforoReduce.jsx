import {useReducer, useState} from 'react';

function SemaforoReduce() {
    //Contanyes con las acciones(Rojo aumenta el numero de rojos y así)
    const ACCIONES = {
        ROJO: 'rojo',
        VERDE: 'verde',
        AMARILLO: 'amarillo'
    }

    //Función para necesaria cuando usas useReducer
    function reducer(state, action){//state y action son los parámetros que recibe la función por defecto

        //Switch para gestionar las acciones
        switch(action.type){
            case ACCIONES.ROJO:
                //Devuelve un nuevo estado(en este caso aumenta el número de rojos)
                return {...state, rojo : state.rojo + 1}
            case ACCIONES.AMARILLO:
                return {...state, amarillo : state.amarillo + 1}
            case ACCIONES.VERDE:
                return {...state,verde : state.verde + 1}
            default: return state;  
        }
    }
    //Inicializa el estado
    const [estado, setEstado] = useReducer(reducer, {rojo:0, amarillo:0, verde:0})

    function incrementar(event){
        let color = event.target.id

        switch(color){
            case 'rojo':
                //Llama a la función reducer con el estado actual y la acción
                setEstado({type:ACCIONES.ROJO})
                break
            
            case 'amarillo':
                setEstado({type:ACCIONES.AMARILLO})
                break
            
            case 'verde':
                setEstado({type:ACCIONES.VERDE})
                break
        }
    }
    
    //Calcula el total de clicks
    const TOTALCLICKS = estado.rojo + estado.amarillo + estado.verde
    
    //Calcula el porcentaje de cada color, si es undefied, NaN o Null, se muestra 0
    const porcentajeRojo = Math.round((estado.rojo / TOTALCLICKS)*100) || 0
    const porcentajeAmarillo = Math.round((estado.amarillo / TOTALCLICKS)*100)|| 0
    const porcentajeVerde = Math.round((estado.verde / TOTALCLICKS)*100) || 0

    
    return(
        <div>
            <h1>Semaforo usando reducer</h1>
            <p>Rojo - {estado.rojo} - {porcentajeRojo}%</p>
            <p>Verde - {estado.verde} - {porcentajeVerde}%</p>
            <p>Amarillo - {estado.amarillo} - {porcentajeAmarillo}%</p>
            <button id='rojo' onClick={incrementar}>Rojo</button>
            <button id='verde' onClick={incrementar}>Verde</button>
            <button id='amarillo' onClick={incrementar}>Amarillo</button>
            <p>Total clicks - {TOTALCLICKS}</p>
        </div>
    )
    
}

export default SemaforoReduce;