import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'element={<LandingPage/>}/>
            </Routes>
        </BrowserRouter>
    )

}