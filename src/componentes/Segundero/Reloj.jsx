import { act, useEffect, useState } from "react";

export default function Reloj() {

    const [reloj2, setHora] = useState({
        horas: 0,
        minutos: 0,
        segundos: 0
    });

    function actualizarReloj() {
        setInterval(actualizarHora, 1000);
    }

    function actualizarHora() {
        console.log(reloj2.segundos)
        setHora(prevReloj2 => {
            let Segundos = reloj.segundos + 1;
            let Minutos = prevReloj2.minutos;
            let Horas = prevReloj2.horas;

            if (Segundos > 59) {
                Segundos = 0;
                Minutos += 1;
            }

            if (Minutos > 59) {
                Minutos = 0;
                Horas += 1;
            }

            if (Horas > 23) {
                Horas = 0;
            }
        })
    }

    useEffect(actualizarReloj, [])

    return (
        <>
            <p>{reloj2.horas}:{reloj2.minutos}:{reloj2.segundos}</p>
        </>
    )
}