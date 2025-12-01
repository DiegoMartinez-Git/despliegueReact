import BotonTema from "./BotonTema";
import TemaElegido from "./TemaElegido";

export default function BarraHerramientas() {
    return (
        <div>
            <BotonTema etiqueta="Archivo"></BotonTema>
            <BotonTema etiqueta="Editar"></BotonTema>
            <BotonTema etiqueta="Terminal"></BotonTema>
            <TemaElegido></TemaElegido>
                    </div>
    )
}