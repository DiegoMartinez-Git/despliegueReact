import { useState } from 'react';

function Contador(props) {

    const [contador, setContador] = useState(props.contador);

    const [clicks, setClicks] = useState([]);

    const resultado = contador % 2 === 0 ? "El número es par" : "El número es impar";


    function incrementarContador(){
        setContador(contador + 1);
        //Otra forma
        //setClicks(clicks.concat('I'));
        setClicks([...clicks, 'I']);
    }

    

    function decrementarContador(){
        if(contador > 0){
            setContador(contador - 1);
        } 
        setClicks([...clicks, 'D']);
        
    }

    
    function reiniciarContador(){
        setContador(props.contador);
        setClicks([...clicks, 'R']);
    }

    let contadorClicks = clicks.length;

    let clicksIncrementar = clicks.filter((c) => c === 'I').length;
    let clicksDecrementar = clicks.filter((c) => c === 'D').length;
    let clicksReiniciar = clicks.filter((c) => c === 'R').length;

    
    let porcentajeIncrementar = Math.round((clicksIncrementar / contadorClicks) * 100) || 0;
    let porcentajeDecrementar = Math.round((clicksDecrementar / contadorClicks) * 100)  || 0;
    let porcentajeReiniciar = Math.round((clicksReiniciar / contadorClicks) * 100) || 0;
    

    return(
        <div>
            <p>{contador}</p>
            <p>{resultado}</p>
            <p>{clicks}</p>
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
export default Contador