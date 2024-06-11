import './index.scss'
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/');
    }
    return (

        <div className="notFound_page container">
            <h1 className="section_titulo title">
                <span className="messageErro">Error - 404</span>
            </h1>

            <p>Pagina Não Encontrada, se o erro continuar ocorrendo:</p>
            <p>* Retorne para Home.<br />
                * Nos Envie o Erro pelo nosso Email, e tente novamente mais tarde.</p>
            <nav className="botao">
                <a onClick={handleNavigate} className="link">Home</a>
            </nav>
        </div>

    )

}