import './index.scss'

export default function Card_produto_painel(props) {
    return (
        <div className='card_produto_painelcomponent'>
            <div className='img_produto'>
                <img src='/assets/image/spiderman.png' alt='produto imagem' />
            </div>

            <div className='card_detalhes'>
                <div>
                    <h2>Spider Man</h2>
                    <span>Marvel e DC</span>
                </div>
                <h2>R$ 200</h2>
            </div>
            <div className='button'>
                <a className='detail'>
                    <span>Detalhes</span>
                </a>
                <div>
                    <a className='edit'>
                        <img src='/assets/image/edit.png' />
                    </a>
                    <a className='delete'>
                        <img src='/assets/image/delete.png' />
                    </a>
                </div>
            </div>


        </div>
    )

}