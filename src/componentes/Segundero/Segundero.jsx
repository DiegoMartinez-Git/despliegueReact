import { useEffect, useState } from "react"

export default function Segundero(props){

    const [segundero, setSegundero] = useState(props.contador)

    function reloj(){
        setInterval(manejarReloj, 1000);
    }

    function manejarReloj(){
        setSegundero(prevSegundero => prevSegundero + 1)
    }

    useEffect(reloj, [])

    return(
        <>
            <p>{segundero}</p>
        </>
    )
}