import './index.scss'
import axios from 'axios'
import React, { useState } from 'react';
import { Box, Modal } from "@mui/material";

import Header from '../../components/Header';
import Promocao_banner from '../../components/Promocao_banner';
import Footer from '../../components/Footer';
import Card_adicionar from '../../components/Card_adicionar';

const style = {
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: 'translate(-50%, -50%)'
};


export default function Painel() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <section className='painel_page'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_adicionar onClose={handleClose} />
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
                    <input type="text" className="input_card" />
                </div>
            </div>
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
            <Footer />
        </section>
    )
}