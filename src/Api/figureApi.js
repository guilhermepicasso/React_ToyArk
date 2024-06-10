import axios from 'axios'

import { API_ADDRESS } from './constant';

export async function salvarFigure(corpo) {
    let url = API_ADDRESS + '/figure/';
    let r = await axios.post(url, corpo);
    return r.data;
  }

  export async function alterarFigure(id, corpo) {
    let url = API_ADDRESS + '/figure/' + id;
    let r = await axios.put(url, corpo);
    return r.data;
  }

  export async function buscarFigures() {
    let url = API_ADDRESS + '/figure/';
    let r = await axios.get(url);
    return r.data;
  }

  export async function buscarFiguresPorId(id) {
    let url = API_ADDRESS + '/figure/' + id;
    let r = await axios.get(url);
    return r.data;
  }

  export async function buscarFigurePorCategoria(categoria) {
    let url = API_ADDRESS + '/figure/categoria/' + categoria;
    let r = await axios.get(url);
    return r.data;
  }

  export async function removerFigure(id) {
    let url = API_ADDRESS + '/figure/' + id;
    let r = await axios.delete(url);
    return r.data;
  }

  export async function alterarImagem(id, capa) {
    let url = API_ADDRESS + '/figure/imagem/' + id;
  
    let form = new FormData();
    form.append('imagem', capa);
  
    let r = await axios.put(url, form, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  
    return r.data;
  }