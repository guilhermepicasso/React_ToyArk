import './index.scss'

export default function Card_adicionar({isOpen, setModalOpen}) {
    if (isOpen) {
        return (
            <div className='card_adicionar_component'>
                <h1>Adicionar um Produto</h1>
    
                <div className='area_arquivo'>
                    <label className='arquivo_campo'>
                        <input type="file" style={{ display: 'none' }} />
                        <img src='/assets/image/plus.png' className='icon' />
                    </label>
                </div>
    
                <div className='inputs_section'>
                    <input className='input_1'
                        type="text"
                        id="nome"
                        name="nome"
                        placeholder="Nome"
                    />
                    <div>
                        <input className='input_2'
                            type="number"
                            id="preco"
                            name="preco"
                            placeholder="Preço"
    
                        />
                        <input className='input_2'
                            type="number"
                            id="altura"
                            name="altura"
                            placeholder="Altura"
    
                        />
                        <input className='input_2'
                            type="number"
                            id="largura"
                            name="largura"
                            placeholder="Largura"
                        />
                    </div>
                </div>
    
    
                <div className='area_buton'>
                    <div>
                        <button>Marvel e DC</button>
                        <button>Animes</button>
                        <button>Games</button>
                    </div>
                    <button onClick={setModalOpen} className='button_salvar' >Salvar</button>
                </div>
    
            </div>
        )
        
    }return null
    

}