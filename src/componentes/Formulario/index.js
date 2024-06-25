import './Formulario.css';
import CampoTexto from '../CampoTexto'; 

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do carioca</h2>
                <CampoTexto label='Apelido' placeholder='Digite seu apelido' />
                <CampoTexto label='Profissa' placeholder='Digite sua profissa' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
            </form>
        </section>
    )
}

export default Formulario;