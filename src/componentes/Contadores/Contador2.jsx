import React, { useState } from 'react';

function Contador2(props){

    const [contador, setContador] = useState({left:0,
                                            right:0});
    function incrementarIzquierda(){
        setContador({...contador, left: contador.left + 1});
    }

    function incrementarDerecha(){
        setContador({...contador, right: contador.right + 1});
    }
    return(
        <div>
            <span>{contador.left}</span>
            <button onClick={incrementarIzquierda}>Left</button>

            <button onClick={incrementarDerecha}>Right</button>
            <span>{contador.right}</span>

        </div>
        
    )
}

export default Contador2;