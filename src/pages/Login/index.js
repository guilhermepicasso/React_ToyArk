import './index.scss'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <section className='login_page'>
            <img className='logo' src='/assets/image/logo.png' alt='Logo da Loja' />
            <div className='login_box'>
                <h2>Painel Administrativo</h2>
                <p>Somente pessoas autorizadas</p>
                <input type="text" placeholder="Usuário" className="input-field" />
                <input type="password" placeholder="Senha" className="input-field" />
                <Link to="/painel" className="login-link">
                <span>Login</span></Link>
            </div>
        </section>
    )

}