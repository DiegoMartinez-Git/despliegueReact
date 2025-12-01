import { useContext } from "react"
import TemaContext from "../../contextos/TemaContext";

const BotonTema = (props) => {

    //Me permite sacar la informacion de la caja(contexto)
    const tema = useContext(TemaContext);

    return (
        <p>Tema: {tema.nombre}</p>
    )
}

export default BotonTema