import { useReducer } from "react"
import botonera from '../../mocks/mock-botones'

export default function IzquierdaDerecha(){

    
    

    function reducer(estado, accion){
        switch(accion.type){
            case 'LEFTUP':
                return(estado.map((boton, index) => {
                    if(index === 0){
                        return {...boton, valor: boton.valor + 1}
                    }
                    return boton;
                }))
            case 'LEFTDOWN':
                return(estado.map((boton, index) => {
                    if(index === 2){
                        return {...boton, valor: boton.valor + 1}
                    }
                    return boton;
                }))
            case 'RIGHTUP':
                return(estado.map((boton, index) => {
                    if(index === 1){
                        console.log(boton)
                        return {...boton, valor: boton.valor + 1}
                    }
                    return boton;
                }))
            case 'RIGHTDOWN':
                return(estado.map((boton, index) => {
                    if(index === 3){
                        return {...boton, valor: boton.valor + 1}
                    }
                    return boton;
                }))
            default:
                return estado;  
        }
    }

    const [estado, setEstado] = useReducer(reducer, botonera)

    function incrementar(event){
        let boton = event.target.id;
        console.log(boton)
        

        switch(boton){
            case 'LeftUp':
                setEstado({type: 'LEFTUP'})
                break;
            case 'RightUp':
                setEstado({type: 'RIGHTUP'})
                break;
            case 'LeftDown':
                setEstado({type: 'LEFTDOWN'})
                break;
            case 'RightDown':
                setEstado({type: 'RIGHTDOWN'})
                break;
        }   
    }

    function esPrimo(num){
        if(num < 2) return false;
        for(let i = 2; i <= Math.sqrt(num); i++){
            if(num % i === 0) return false;
        }
        return true;
    }
    function ParImparPrimo(num){
            if(esPrimo(num)){
                return "amarillo"
            }
            if(num%2 === 0){
                return "verde"
            } else {
                return "rojo"
            }
        
    }
    



    return(
        <div>
            {estado.map((value,index) => {
                if (index === 1) {
                    return <><button id={value.texto} className={ParImparPrimo(value.valor)} onClick={incrementar}>{value.texto} - {value.valor}</button> <br/></>
                }else
                    return <button id={value.texto} className={ParImparPrimo(value.valor)} onClick={incrementar}>{value.texto} - {value.valor}</button>
})}
        </div>
    )
}