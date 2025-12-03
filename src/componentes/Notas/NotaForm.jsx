export default function NotaForm() {

    return (
        <>
            <h2>Nueva Nota</h2>
            <form>
                <label htmlFor="contenido">Contenido</label><br />
                <input type="text" name="contenido" placeholder="" required/><br />
                <br />
                <label htmlFor="fecha">Fecha</label><br />
                <input type="date" name="fecha" id="fecha" required/><br />
                <br />
                <label htmlFor="importancia">Importancia</label><br />
                    <label>
                        <input type="radio" name="importancia" value="importante" checked
                        />
                        Importante
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="importancia"
                            value="noImportante"
                        />
                        No importante
                    </label><br />
                    <button id="añadirNota">Añadir Nota</button>
            </form>

        </>
    );
}
