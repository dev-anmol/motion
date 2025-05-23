import React from 'react';
import { Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Content from './components/Section/Content.tsx';

const Home = React.lazy(() => import('./components/Home/Home.tsx'));
const Card = React.lazy(() => import('./components/Card/Card.tsx'));

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/subscribe' element={<Card />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/content' element={<Content />} />
            </Routes>
        </div>
    );
}

export default App;
