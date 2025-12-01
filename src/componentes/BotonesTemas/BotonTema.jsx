import { useContext } from "react"
import TemaContext from "../../contextos/TemaContext";

const BotonTema = (props) => {

    //Me permite sacar la informacion de la caja(contexto)
    const tema = useContext(TemaContext);

    return (
        <button style={{background : tema.background, color: tema.foregronund}} name={tema.nombre}>
            {props.etiqueta} 
        </button>
    )
}

export default BotonTema