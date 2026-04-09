import './titulo-formulario.estilos.css'
// props é um OBJETO
// props.children
export function TituloFormulario(props) {
    return (
        <h2 className='titulo-form'>{props.children}</h2>
    )
}