export default function BotonFiltro({ activo, alClickar }) {
    return (

        //Devuelve un boton que al clickar llama a la funcion alClickar
        //Si activo es true, el texto del boton será 'Mostrar Todos', si no, será 'Mostrar importantes'
        <button onClick={alClickar}>
            {activo ? 'Mostrar Todos' : 'Mostrar importantes'}
        </button>
    );
}