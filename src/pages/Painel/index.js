import './index.scss'

import Header from '../../components/Header';
import Promocao_banner from '../../components/Promocao_banner';
import Footer from '../../components/Footer';

export default function Painel() {
    return (
        <section className='painel_page'>
            <Promocao_banner texto="Bem Vindo ao seu painel administrativo" />
            <Header opcao={2} />

            <div className='painel_content'>
                <a>
                    <img src='/assets/image/plus.png' alt='plus icone' />
                    <span>Adcionar um produto</span>
                </a>
                <div className='input-section'>
                    <img src='/assets/image/lupa.png' alt='lupa icone' />
                    <input type="text" className="input_card" />
                </div>
            </div>

            <section className='produto_section marvelDc_card'>
                <h1>Marvel e DC</h1>
                <div className='card_produto'></div> {/* componente futuro */}
            </section>

            <section className='produto_section animes_cad'>
                <h1>Animes</h1>
                <div className='card_produto'></div> {/* componente futuro */}
            </section>

            <section className='produto_section games_card'>
                <h1>Games</h1>
                <div className='card_produto'></div> {/* componente futuro */}
            </section>





            <Footer />
        </section>

    )

}