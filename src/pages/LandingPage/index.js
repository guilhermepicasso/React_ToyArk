import './index.scss';


export default function LandingPage() {
  return (
    <div className='landing_page'>
      <div className='promocao_banner'>
        <span>Compras acima de 300 reais tem 10% de Desconto 🛍️</span>
      </div>
      <header>  {/* componente futuro */}
        <a className='button_header' style={{ backgroundColor:'#F9C22E'}}>
          <img src='/assets/image/icon_info.png' alt='icone sobre'/>
          <span>Sobre Nós</span>
        </a>
        <img src='/assets/image/logo.png' alt='Logo da Loja'/>
        <a className='button_header' style={{ backgroundColor:'#F24040'}}>
        <img src='/assets/image/icon_profile.png' alt='icone profile'/>
        <span>Painel<br/>Administrativo</span>
        </a>
      </header>

      <section className='hero'>
        <div>
          <h1 className='text1'>Compre seus action figures de personagens favoritos aqui</h1>
          <h2 className='text2'>Venha decorar sua estante 🎉</h2>
        </div>
        <img className='imagehero' src='/assets/image/berserkFigure.png' alt='imagem figure no hero'/>
      </section>

      <section className='marca_section'>
        <div className='container_titulo'><h2>Todas suas marcas Favoritas</h2></div>
        <div className='container_marcas'>
          <img className='icone' src='/assets/image/starwars_marca.png'/>
          <img className='icone' src='/assets/image/marvel_marca.png'/>
          <img className='icone' src='/assets/image/pokemon_marca.png'/>

          <img className='icone' src='/assets/image/disney_marca.png'/>
          <img className='icone' src='/assets/image/dc_marca.png'/>
          <img className='icone' src='/assets/image/anime_marca.png'/>
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
        <div className='card_reasons'>
          <img src='/assets/image/payment.png' alt='icone pagamento flexível'/> {/* componente futuro */}
          <p>Pagamento flexível</p>
        </div>
        <div className='card_reasons'>
          <img src='/assets/image/payment.png' alt='icone pagamento flexível'/>
          <p>Sempre com os melhores preços</p>
        </div>
        <div className='card_reasons'>
          <img src='/assets/image/payment.png' alt='icone pagamento flexível'/>
          <p>Ambiente amigo<br/>Pró consumidor</p>
        </div>
        <div className='card_reasons'>
          <img src='/assets/image/payment.png' alt='icone pagamento flexível'/>
          <p>Compramos alguns itens</p>
        </div>
      </section>

      


    </div>
  );
}

