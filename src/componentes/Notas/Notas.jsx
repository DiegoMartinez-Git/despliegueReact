import { useState } from 'react';

//Importacion de los componentes MostrarNotas y BotonNotas
import MostrarNotas from './MostrarNotas';
import BotonNotas from './BotonNotas'

//Funcion con un parametro(el parametro será la lista la lista entera(mock-notas))
export default function Notas({ notasIniciales }) {

    //Declaración de la variable con el useState
    const [estado, setEstado] = useState(false);

    //Variable con las notas(si estado es verdadero, las notas se filtrarán, si no, se mostrarán todas)
    const notasFiltradas = estado 
        ? notasIniciales.filter(n => n.importante === true) 
        : notasIniciales;

    //Cambia el estado de la variable estado(la que determina si te muestra las notas filtradas o no)
    const cambiarEstado = () => {
        setEstado(!estado);
    };

    return (
        <div>
            <h1>Notas</h1>
            
            {/** 
             * Llama al componente BotonNotas y le pasa los parametros activo(la varible estado) y
             * otro parametro alClickar(la funcion que cambia el estado)
             */}
            <BotonNotas
                activo={estado} 
                alClickar={cambiarEstado} 
            />

            {/**
             * Llama al componente MostrarNotas donde se le pasa el parametro con las 
             * notas, ya sean filtradas o no(usando la variable notasFiltradas)
             */}
            <MostrarNotas notas={notasFiltradas} />
            
        </div>
    );
}