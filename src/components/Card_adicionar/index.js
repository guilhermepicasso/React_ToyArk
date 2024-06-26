import './index.scss'
import axios from 'axios'
import { useState, useEffect } from 'react';
import * as figureApi from '../../Api/figureApi'
import { toast } from 'react-toastify'
import {API_ADDRESS} from '../../Api/constant'


export default function Card_adicionar({ onClose , item , onSave }) {
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [altura, setAltura] = useState('')
    const [largura, setLargura] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [arquivoImagem, setArquivoImagem] = useState(null);
    const [imagemAlterada, setImagemAlterada] = useState(false);

    useEffect(() => {
        if (item) {
            setId(item.id || '');
            setNome(item.nome || '');
            setPreco(item.preco || '');
            setAltura(item.altura || '');
            setLargura(item.largura || '');
            setCategoria(item.categoria || '');
            const imagemURL = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}`: null;
            setImagem(imagemURL || '');
        }
    }, [item]);

    const handleButtonClick = (categoria, index) => {
        setCategoria(categoria);
        setSelectedIndex(index);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setArquivoImagem(file);
            setImagem(URL.createObjectURL(file));
            setImagemAlterada(true);
        }
    };

    async function salvar() {
        try {
            if (!nome || !preco || !altura || !largura || !categoria || !imagem) {
                toast.warning("Todos os campos devem ser preenchidos");
            } else {
                let corpo = {
                    "nome": nome,
                    "preco": preco,
                    "altura": altura,
                    "largura": largura,
                    "categoria": categoria,
                };
                if (!id) {
                    try {
                        let info = await figureApi.salvarFigure(corpo);
                        await figureApi.alterarImagem(info.id, arquivoImagem);
                        toast.success('Figure inserido com ID: ' + info.id);
                    } catch (error) {
                        toast.error('Erro ao inserir a figure: ' + error.message);
                    }
                } else {
                    try {
                        let editItem = {...corpo,id};
                        await figureApi.alterarFigure(editItem.id,editItem);
                        if (imagemAlterada) {
                            await figureApi.alterarImagem(editItem.id, arquivoImagem);
                            toast.success('Imagem Alterada');
                        }
                        toast.success('Figure alterado com sucesso.');
                    } catch (error) {
                        toast.error('Erro ao alterar a figure: ' + error.message);
                    }
                }
                onClose();
                onSave();
            }
        } catch (error) {
            toast.error('Ocorreu um erro inesperado: ' + error.message);
            console.error("Erro:", error);
        }
    }

    return (
        <div className='card_adicionar_component'>
            <h1>{id ? 'Editar Produto' : 'Adicionar um Produto'}</h1>

            <div className='area_arquivo'>
                <label className='arquivo_campo'>
                    <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />
                    {imagem === null ?
                        <img src='/assets/image/plus.png' className='icon' /> :
                        <img src={imagem} alt="Imagem selecionada" className='imagem_nova' />
                    }
                </label>
            </div>

            <div className='inputs_section'>
                <input className='input_1'
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    id="nome"
                    name="nome"
                    placeholder="Nome"
                />
                <div>
                    <input className='input_2'
                        type="number"
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                        id="preco"
                        name="preco"
                        placeholder="Preço"

                    />
                    <input className='input_2'
                        type="number"
                        value={altura}
                        onChange={e => setAltura(e.target.value)}
                        id="altura"
                        name="altura"
                        placeholder="Altura"

                    />
                    <input className='input_2'
                        type="number"
                        value={largura}
                        onChange={e => setLargura(e.target.value)}
                        id="largura"
                        name="largura"
                        placeholder="Largura"
                    />
                </div>
            </div>


            <div className='area_buton'>
                <div>
                    <button onClick={() => handleButtonClick('Heroi', 0)}
                        style={{ backgroundColor: categoria === 'Heroi' ? '#F24040' : '#ffff' }}>Heroi</button>
                    <button onClick={() => handleButtonClick('Anime', 1)}
                        style={{ backgroundColor: categoria === 'Anime' ? '#F9C22E' : '#ffff' }}>Animes</button>
                    <button onClick={() => handleButtonClick('Game', 2)}
                        style={{ backgroundColor: categoria === 'Game' ? '#808080' : '#ffff' }}>Games</button>
                </div>
                <button className='button_salvar' onClick={salvar} >Salvar</button>
            </div>

        </div>
    )




}