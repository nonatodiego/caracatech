import './Formulario.css';
import CampoTexto from '../CampoTexto'; 
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = () => {
    const times = ['Peladeiros', 'Galácticos', 'Geração Nutella', 'Brabos', 'Mitos'];

    const aoSalvar = (e) => {
        e.preventDefault();
        console.log('Salvando jogador');
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do jogador</h2>
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto obrigatorio={true} label='Posição' placeholder='Digite sua posição' />
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