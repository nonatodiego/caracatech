import './Formulario.css';
import CampoTexto from '../CampoTexto'; 
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    const times = ['Peladeiros', 'Galácticos', 'Geração Nutella', 'Brabos', 'Mitos'];
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados do jogador</h2>
                <CampoTexto label='Nome' placeholder='Digite seu nome' />
                <CampoTexto label='Posição' placeholder='Digite sua posição' />
                <CampoTexto label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa itens={times} label='Time' />
                <Botao> 
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;