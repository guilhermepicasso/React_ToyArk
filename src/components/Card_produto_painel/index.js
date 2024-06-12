import './index.scss'
import axios from 'axios'
import {API_ADDRESS} from '../../Api/constant'
import React, { useState } from 'react';
import { Box, Modal } from "@mui/material";
import Card_detalhe from '../Card_detalhe'
import Card_adicionar from '../Card_adicionar';
import * as figureApi from '../../Api/figureApi'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'

const style = {
    position: 'absolute',
    top: '50%',
    left: "50%",
    transform: 'translate(-50%, -50%)'
};

export default function Card_produto_painel({item, onSave}) {
    const imagem = item.imagem ? `${API_ADDRESS}/${item.imagem.replace(/\\/g, '/')}`: null;
    const [open, setOpen] = useState(false);
    const [openEdit, setEditOpen] = useState(false);
    const [editedItem, setEditedItem] = useState(null);

    const handleOpen = (type) => {
        if (type === 1) {
            setOpen(true);
        }else{
            setEditOpen(true); 
            setEditedItem(item); 
        }
    };

    const handleClose = (type) => {
        if (type === 1) {
            setOpen(false);
        }else{
            setEditOpen(false);
            setEditedItem(null);
        }
    };

    async function removerFigure(item) {
        confirmAlert({
          title: 'Remover Figure',
          message: 'Tem certeza que vai remover a Figure?',
          buttons: [
            {
              label: 'Sim',
              onClick: async () => {
                let r = await figureApi.removerFigure(item.id);
                toast.success('Figure removido com sucesso.');
                onSave();
              }
            },
            { label: 'Não' }
          ]
        });
      }

    return (
        <div className='card_produto_painelcomponent'>
            <div className='img_produto'>
                <img src={imagem} alt='produto imagem' />
            </div>

            <div className='card_detalhes'>
                <div>
                    <h2>{item.nome}</h2>
                    <span>{item.categoria}</span>
                </div>
                <h2>R$ {item.preco}</h2>
            </div>
            <div className='button'>
                <a onClick={() => handleOpen(1)} className='detail'>
                    <span>Detalhes</span>
                </a>
                <div>
                    <a onClick={() => handleOpen(2)} className='edit'>
                        <img src='/assets/image/edit.png' />
                    </a>
                    <a onClick={() => removerFigure(item)} className='delete'>
                        <img src='/assets/image/delete.png' />
                    </a>
                </div>
            </div>
            <Modal
                open={open}
                onClose={() => handleClose(1)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_detalhe item={item} onClose={() => handleClose(1)} />
                </Box>
            </Modal>
            <Modal
                open={openEdit}
                onClose={() => handleClose(2)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card_adicionar item={editedItem} onClose={() => handleClose(2)} onSave={onSave} />
                </Box>
            </Modal>
        </div>
    )

}