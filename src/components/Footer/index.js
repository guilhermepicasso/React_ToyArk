import './index.scss'

export default function Footer(props) {

    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/assets/image/logo.png" alt="Logo" className="footer-logo" />
                <div className="social-icons">
                    <a>
                        <img src="/assets/image/insta.png" alt="Instagram" className="icon" />
                    </a>
                    <a>
                        <img src="/assets/image/x.png" alt="X" className="icon" />
                    </a>
                    <a>
                        <img src="/assets/image/phone.png" alt="Phone" className="icon" />
                    </a>
                    <a>
                        <img src="/assets/image/map.png" alt="Map" className="icon" />
                    </a>
                </div>
            </div>

            <div className="footer-right">
                <ul>
                    <li><a>Site</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Promoções</a></li>
                    <li><a>Como vender seus itens ?</a></li>
                    <li><a>Contato</a></li>
                </ul>
                <ul>
                    <li><a>Categorias</a></li>
                    <li><a>Marvel e DC</a></li>
                    <li><a>Animes</a></li>
                    <li><a>Games</a></li>
                </ul>
            </div>
        </footer>
    )

}