import './index.scss';

import Header from '../../components/Header';
import Promocao_banner from '../../components/Promocao_banner';
import Footer from '../../components/Footer';


export default function LandingPage() {
  return (
    <div className='landing_page'>
      <Promocao_banner texto="Compras acima de 300 reais tem 10% de Desconto 🛍️" />
      <Header />

      <section className='hero'>
        <div className='hero_content'>
          <h1 className='text1'>Compre seus action figures de personagens favoritos aqui</h1>
          <h2 className='text2'>Venha decorar sua estante 🎉</h2>
        </div>
        <img className='imagehero' src='/assets/image/berserkFigure.png' alt='imagem figure no hero' />
      </section>

      <section className='marca_section'>
        <div className='container_titulo'><h2>Todas suas marcas Favoritas</h2></div>
        <div className='container_marcas'>
          <img className='icone' src='/assets/image/starwars_marca.png' />
          <img className='icone' src='/assets/image/marvel_marca.png' />
          <img className='icone' src='/assets/image/pokemon_marca.png' />

          <img className='icone' src='/assets/image/disney_marca.png' />
          <img className='icone' src='/assets/image/dc_marca.png' />
          <img className='icone' src='/assets/image/anime_marca.png' />
        </div>
      </section>

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


      <section className='whyBuyHere_section'>
        <h1>Porque comprar na ToyArk ?</h1>
        <div className='reasons'>

          <div className='card_reasons'>
            <img className='img_reason' src='/assets/image/payment.png' alt='icone pagamento flexível' />
            <p>Pagamento flexível</p>
          </div>

          <div className='card_reasons'>
            <img className='img_reason' src='/assets/image/price.png' alt='icone pagamento flexível' />
            <p>Sempre com os melhores preços</p>
          </div>
          <div className='card_reasons'>
            <img className='img_reason' src='/assets/image/friendly.png' alt='icone pagamento flexível' />
            <p>Ambiente amigo<br />Pró consumidor</p>
          </div>
          <div className='card_reasons'>
            <img className='img_reason' src='/assets/image/buySell.png' alt='icone pagamento flexível' />
            <p>Compramos alguns itens</p>
          </div>
        </div>
      </section>

      <section className='Sobre_section' id='sobre'>
        <h1>Venha Conhecer a Loja</h1>
        <div className='container_sobre'>
          <div className='texto_sobre'>
            <img src='/assets/image/deadpool.png'></img>
            <span>Explore um mundo de aventura e nostalgia na ToyArk Seja você um colecionador ávido ou um amante casual do universo geek, estamos aqui para proporcionar uma experiência única. </span>
          </div>
          <div className='img_sobre'>
            <img src='/assets/image/loja.jpg'></img>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

