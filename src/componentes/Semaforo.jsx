import {useState} from 'react';

function Semaforo(props){
    const [rojo, setRojo] = useState(0)
    const [amarillo, setAmarillo] = useState(0)
    const [verde, setVerde] = useState(0)

    function incrementarRojo(event){
        console.log(event)
        setRojo(rojo + 1);
    }

    function incrementarAmarillo(){
        setAmarillo(amarillo + 1);
    }

    function incrementarVerde(){
        setVerde(verde + 1);
    }

    let clicksTotal = rojo + amarillo + verde;

    const porcentajeRojo = Math.round((rojo / clicksTotal) * 100) || 0;
    const porcentajeAmarillo = Math.round((amarillo / clicksTotal) * 100) || 0;
    const porcentajeVerde = Math.round((verde / clicksTotal) * 100) || 0;

    return(
        <div>
            <button id='rojo' onClick={incrementarRojo}>Rojo</button>
            
            <button id='amarillo' onClick={incrementarAmarillo}>Amarillo</button>
            
            <button id='verde' onClick={incrementarVerde}>Verde</button>
            <p>Rojo-{rojo}-{porcentajeRojo}%</p>
            <p>Amarillo-{amarillo}-{porcentajeAmarillo}%</p>
            <p>Verde-{verde}-{porcentajeVerde}%</p>
            <p>Clicks totales: {clicksTotal}</p>
        </div>
    )
}

export default Semaforo;