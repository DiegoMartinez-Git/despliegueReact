export default function MostrarNotas({ notas }) {
    return (
        //Devuelve una lista con los elementos del mock
        // (filtrados o no depende de lo que se le ha pasado por parametros)
        <ul>
            {notas.map((nota) => (
                <li key={nota.id}>
                    <strong>{nota.contenido}</strong>
                    
                    {/**
                     * Si el atributo importante es true
                     * añade imporante al contenido de la nota
                     * y ademas lo pinta de rojo
                     */}
                    {nota.importante && (
                        <span style={{ color: 'red', marginLeft: '5px' }}>
                            (importante)
                        </span>
                    )}
                    
                    <br />
                    <small>{nota.fecha}</small>
                    
                </li>
            ))}
        </ul>
    );
}