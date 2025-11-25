import {useReducer, useState} from 'react';

function SemaforoReduce() {

    const ACCIONES = {
        ROJO: 'rojo',
        VERDE: 'verde',
        AMARILLO: 'amarillo'
    }

    function reducer(state, action){

        switch(action.type){
            case ACCIONES.ROJO:
                return {...state, rojo : state.rojo + 1}
            case ACCIONES.AMARILLO:
                return {...state, amarillo : state.amarillo + 1}
            case ACCIONES.VERDE:
                return {...state,verde : state.verde + 1}
            default: return state;  
        }
    }
    
    const [estado, setEstado] = useReducer(reducer, {rojo:0, amarillo:0, verde:0})

    function incrementar(event){
        let color = event.target.id

        switch(color){
            case 'rojo':
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

    const TOTALCLICKS = estado.rojo + estado.amarillo + estado.verde

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