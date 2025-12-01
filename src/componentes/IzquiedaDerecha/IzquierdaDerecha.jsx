import { useReducer } from "react"

export default function IzquierdaDerecha(props){

    
    const botonera = [{
        texto: "LeftUp",
        valor: 0
    },{
        texto: "LeftDown",
        valor: 0
    },{
        texto: "RightUp",
        valor: 0
    },{
        texto: "RightDown",
        valor: 0

    }]

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
                    if(index === 1){
                        return {...boton, valor: boton.valor + 1}
                    }
                    return boton;
                }))
            case 'RIGHTUP':
                return(estado.map((boton, index) => {
                    if(index === 2){
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
        

        switch(boton){
            case 'LeftUp':
                setEstado({type: 'LEFTUP'})
                break;
            case 'RightUp':
                setEstado({type: 'LEFTDOWN'})
                break;
            case 'LeftDown':
                setEstado({type: 'RIGHTUP'})
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
            <button id="LeftUp" className={ParImparPrimo(estado[0].valor)} onClick={incrementar}>LeftUp - {estado[0].valor}</button>
            <button id="RightUp" className={ParImparPrimo(estado[1].valor)} onClick={incrementar}>RightUp - {estado[1].valor}</button>
            <br/>
            <button id="LeftDown"  className={ParImparPrimo(estado[2].valor)} onClick={incrementar}> LeftDown - {estado[2].valor}</button>
            <button id="RightDown" className={ParImparPrimo(estado[3].valor)} onClick={incrementar}>RightDown - {estado[3].valor}</button>
        </div>
    )
}