import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Painel from './pages/Painel';
import Teste from './pages/Teste';
import NotFoundPage from './pages/NotFoundPage';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<LandingPage/>}/>
                <Route path='/login'element={<Login/>}/>
                <Route path='/painel'element={<Painel/>}/>
                <Route path='/teste'element={<Teste/>}/>
                <Route path='*'element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}