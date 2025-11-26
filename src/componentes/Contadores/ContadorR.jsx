import { act, useReducer, useState } from 'react';

function ContadorR(props) {

    const ACCIONES = {
        INCREMENTAR: 'incrementar',
        DECREMENTAR: 'decrementar',
        REINICIAR: 'reiniciar'
    }

    function reducer(state, action){

        switch(action.type){
            case ACCIONES.INCREMENTAR:
                return {contador: state.contador + 1,
                        //Añade el click a la lista de clicks(usando ...state.clicks, que es una copia del array)
                        clicks: [...state.clicks, 'i']};
            case ACCIONES.DECREMENTAR:
                    return {contador: state.contador - 1,
                            clicks: [...state.clicks, 'd']};
            case ACCIONES.REINICIAR:
                    return {contador: 0,
                            clicks: [...state.clicks, 'r']};
            default: return state;                
        }
    }

    

    //const [contador, setContador] = useState(props.contador);
    const [state, setState] = useReducer(reducer, {contador:props.contador, clicks:[]});

    //const [clicks, setClicks] = useState([]);

    const resultado = state.contador % 2 === 0 ? "El número es par" : "El número es impar";


    function incrementarContador(){
        setState({type: ACCIONES.INCREMENTAR});
    }

    

    function decrementarContador(){
        setState({type: ACCIONES.DECREMENTAR});
        
    }

    
    function reiniciarContador(){
        setState({type: ACCIONES.REINICIAR});
        
    }

    let contadorClicks = state.clicks.length;

    let clicksIncrementar = state.clicks.filter((c) => c === 'I').length;
    let clicksDecrementar = state.clicks.filter((c) => c === 'D').length;
    let clicksReiniciar = state.clicks.filter((c) => c === 'R').length;

    
    let porcentajeIncrementar = Math.round((clicksIncrementar / contadorClicks) * 100) || 0;
    let porcentajeDecrementar = Math.round((clicksDecrementar / contadorClicks) * 100)  || 0;
    let porcentajeReiniciar = Math.round((clicksReiniciar / contadorClicks) * 100) || 0;
    

    return(
        <div>
            <p>Contador useReduce</p>
            <p>{state.contador}</p>
            <p>{resultado}</p>
            <p>{state.clicks}</p>
            <p>Incrementar: {clicksIncrementar} - {porcentajeIncrementar}%</p>
            <p>Decrementar: {clicksDecrementar} - {porcentajeDecrementar}%</p>
            <p>Reiniciar: {clicksReiniciar} - {porcentajeReiniciar}%</p>
            <p>Número de clicks: {contadorClicks}</p>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={incrementarContador}>Incrementar</button>
            <button onClick={reiniciarContador}>Resetear</button>
            
        </div>
    )
    
}
export default ContadorR