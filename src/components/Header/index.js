import './index.scss'
import { Link } from 'react-router-dom'

export default function Header(props) {

    const opcao = props.opcao === 2;

    return (
        <header>
            {opcao ? (
                <Link to="/" className='button_header' style={{ backgroundColor: '#F9C22E' }}>
                    <img src='/assets/image/home.png' alt='icone sobre' />
                    <span>Home</span>
                </Link>
            ):(
            <a href='#sobre' className='button_header' style={{ backgroundColor: '#F9C22E' }}>
                <img src='/assets/image/icon_info.png' alt='icone sobre' />
                <span>Sobre Nós</span>
            </a>
            )}
            <img src='/assets/image/logo.png' alt='Logo da Loja' />

            <Link to='/login' className='button_header' style={{ backgroundColor: '#F24040' }} >
                <img src='/assets/image/icon_profile.png' alt='icone profile' />
                <span>Painel<br />Administrativo</span>
            </Link>
        </header>
    )

}