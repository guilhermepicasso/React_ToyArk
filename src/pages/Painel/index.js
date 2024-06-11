import './index.scss'
import axios from 'axios'
import { Box, Modal } from "@mui/material";
import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Promocao_banner from '../../components/Promocao_banner';
import Footer from '../../components/Footer';
import Card_adicionar from '../../components/Card_adicionar';
import Card_produto_painel from '../../components/Card_produto_painel'
import * as figureApi from '../../Api/figureApi'

const style = {
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: 'translate(-50%, -50%)'
};


export default function Painel() {
    const [open, setOpen] = useState(false);
    const [listaFigures, setListaFigures] = useState([]);
    const [listaFiguresHeroi, setListaFiguresHeroi] = useState([]);
    const [listaFiguresAnimes, setListaFiguresAnimes] = useState([]);
    const [listaFiguresGames, setListaFiguresGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    useEffect(() => {
        fetchFigures();
    }, []);

    async function fetchFigures() {
        try {
            const info = await figureApi.buscarFigures();
            const infoH = await figureApi.buscarFigurePorCategoria('Heroi');
            const infoA = await figureApi.buscarFigurePorCategoria('Anime');
            const infoG = await figureApi.buscarFigurePorCategoria('Game');

            setListaFigures(info);
            setListaFiguresHeroi(infoH);
            setListaFiguresAnimes(infoA);
            setListaFiguresGames(infoG);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const filteredFiguresHeroi = listaFiguresHeroi.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredFiguresAnimes = listaFiguresAnimes.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredFiguresGames = listaFiguresGames.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className='painel_page'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_adicionar onClose={handleClose} onSave={fetchFigures} />
                </Box>
            </Modal>

            <Promocao_banner texto="Bem Vindo ao seu painel administrativo" />
            <Header opcao={2} />
            <div className='painel_content'>
                <button onClick={handleOpen}>
                    <img src='/assets/image/plus.png' alt='plus icone' />
                    <span>Adcionar um produto</span>
                </button>
                <div className='input-section'>
                    <img src='/assets/image/lupa.png' alt='lupa icone' />
                    <input type="text" className="input_card" value={searchTerm} onChange={handleSearch} />
                </div>
            </div>
            <section className='produto_section marvelDc_card'>
                <h1>Marvel e DC</h1>
                <div className='card_produto'>
                    {filteredFiguresHeroi.map(item => (
                        <Card_produto_painel key={item.id} item={item} onSave={fetchFigures}/>
                    ))}</div>
            </section>

            <section className='produto_section animes_cad'>
                <h1>Animes</h1>
                <div className='card_produto'>
                    {filteredFiguresAnimes.map(item => (
                        <Card_produto_painel key={item.id} item={item} onSave={fetchFigures} />
                    ))}
                </div>
            </section>

            <section className='produto_section games_card'>
                <h1>Games</h1>
                <div className='card_produto'>
                    {filteredFiguresGames.map(item => (
                        <Card_produto_painel key={item.id} item={item} onSave={fetchFigures} />
                    ))}
                </div>
            </section>
            <Footer />
        </section>
    )
}