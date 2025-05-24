import React from 'react';
import { Route, Routes } from "react-router-dom";
import Content from './components/Section/Content.tsx';

const Home = React.lazy(() => import('./components/Home/Home.tsx'));
const Card = React.lazy(() => import('./components/Card/Card.tsx'));
const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard.tsx'))
const Layout = React.lazy(() => import('./components/Layout/Layout.tsx'))
const NavBar = React.lazy(() => import('./components/NavBar/NavBar.tsx'))

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/subscribe' element={<Card />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/content' element={<Content />} />
                <Route path='/layout' element={<Layout />} />
                <Route path='/navbar' element={<NavBar />} />

            </Routes>
        </div>
    );
}

export default App;
