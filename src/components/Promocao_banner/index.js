import './index.scss'

//Compras acima de 300 reais tem 10% de Desconto 🛍️

export default function Promocao_banner(props) {

    return (
        <div className='promocao_banner'>
            <span>{props.texto}</span>
        </div>
    )

}