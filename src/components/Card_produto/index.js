import './index.scss'

export default function Card_produto(props) {
    return (
        <div className='card_produto_component'>
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
                <a>
                    <span>Detalhes</span>
                </a>
            </div>


        </div>
    )

}