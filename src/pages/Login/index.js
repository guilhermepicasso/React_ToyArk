import './index.scss'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import {API_ADDRESS} from '../../Api/constant';
import axios from 'axios';

export default function Login() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () =>{
        try {
            const resp = await axios.post(API_ADDRESS + '/login',{user,senha});
            if (resp.status === 200) {
                toast.success("Bem vindo " + user)
                navigate(`/painel`); 
            }
        } catch (error) {
            toast.warning("Usuário ou senha inválidos");
        }
    }

    return (
        <section className='login_page'>
            <img className='logo' src='/assets/image/logo.png' alt='Logo da Loja' />
            <div className='login_box'>
                <h2>Painel Administrativo</h2>
                <p>Somente pessoas autorizadas</p>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Usuário" className="input-field" />
                <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" className="input-field" />
                <a onClick={handleLogin} className="login-link">
                    <span>Login</span></a>
            </div>
        </section>
    )

}