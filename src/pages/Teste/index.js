import './index.scss'

import Card_produto from '../../components/Card_produto'
import Card_adicionar from '../../components/Card_adicionar'
import Card_produto_painel from '../../components/Card_produto_painel'
import Card_detalhe from '../../components/Card_detalhe'


export default function Teste() {
    return (
        <div className='teste'>
            <h1>Pagina de teste</h1>
            <Card_adicionar/>
            <Card_produto_painel/>
        </div>


    )

}