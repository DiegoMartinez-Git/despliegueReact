export default function RegistroTabla({tema}){
    return(
        <tr >
            <td>{tema.id}</td>
            <td>{tema.descripcion}</td>
        </tr>
    )
}