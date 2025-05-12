import React from 'react';
import {Route, Routes} from "react-router-dom";

const Home = React.lazy(() => import('./components/Home/Home.tsx'));
const Card = React.lazy(() => import('./components/Card/Card.tsx'));

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/card' element={<Card/>}/>
            </Routes>
        </div>
    );
}

export default App;
