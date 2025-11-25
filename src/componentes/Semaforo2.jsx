import {useState} from 'react';

function Semaforo2(props){

    const [botones, setBotones] = useState({rojo:0,
                                            amarillo:0,
                                            verde:0});

    function incrementar(event){
        let color = event.target.id;
        switch(color){
            case 'rojo':
                setBotones({...botones, rojo: botones.rojo + 1});
                break;
            case 'amarillo':
                setBotones({...botones, amarillo: botones.amarillo + 1});
                break;
            case 'verde':
                setBotones({...botones, verde: botones.verde + 1});
                break;
            default:
                break;
        }
    }

    const clicksTotal = botones.rojo + botones.amarillo + botones.verde;

    const porcentajeRojo = Math.round((botones.rojo / clicksTotal) * 100) || 0;
    const porcentajeAmarillo = Math.round((botones.amarillo / clicksTotal) * 100) || 0;
    const porcentajeVerde = Math.round((botones.verde / clicksTotal) * 100) || 0;

    return(
        <div>
            <button id='rojo' onClick={incrementar}>Rojo</button>
            
            <button id='amarillo' onClick={incrementar}>Amarillo</button>
            
            <button id='verde' onClick={incrementar}>Verde</button>
            <p>Rojo-{botones.rojo}-{porcentajeRojo}%</p>
            <p>Amarillo-{botones.amarillo}-{porcentajeAmarillo}%</p>
            <p>Verde-{botones.verde}-{porcentajeVerde}%</p>
            <p>Clicks totales: {clicksTotal}</p>
        </div>
    )

}
export default Semaforo2;
