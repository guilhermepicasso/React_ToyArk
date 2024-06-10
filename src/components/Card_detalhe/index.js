import './index.scss'

export default function Card_detalhe(props) {

    return(
        <div className='card_detalhe_component'>

            <div className='img_area'>
                <img src='/assets/image/spiderman.png' alt='produto imagem' />
            </div>

            <div className='detais_area'>
                <div className='details_1'>
                    <h2>Spider Man</h2>
                    <span>Altura : 20cm</span>
                    <span>Largura : 20cm</span>
                    <a>Heroi</a>
                </div>
                <div className='detail_2'>
                    <h2>R$ 200</h2>
                </div>

            </div>

        </div>
    )
    
}